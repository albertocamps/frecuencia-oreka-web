import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './Home'
import About from './About'
import Massages from './Massages'
import Tarot from './Tarot'
import AcompanamientoEmocional from './AcompanamientoEmocional'
import Contact from './Contact'
import './ContinuousPage.css'

const sectionIds = {
  '/': 'inicio',
  '/sobre-mi': 'sobre-mi',
  '/masajes': 'masajes',
  '/tarot': 'tarot',
  '/acompanamiento-emocional': 'acompanamiento-emocional',
  '/contact': 'contact',
}

function Section({ id, title, children }) {
  return (
    <section className="continuous-section" id={id} aria-labelledby={`${id}-section-title`}>
      <header className="continuous-heading">
        <h2 id={`${id}-section-title`}>{title}</h2>
      </header>
      {children}
    </section>
  )
}

function ContinuousPage() {
  const { t } = useTranslation()
  const { pathname, state } = useLocation()

  useEffect(() => {
    const behavior = state?.smoothScroll && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant'
    const frame = requestAnimationFrame(() => {
      if (Number.isFinite(state?.restoreScrollY)) {
        window.scrollTo({ top: state.restoreScrollY, behavior: 'instant' })
      } else if (pathname === '/') {
        window.scrollTo({ top: 0, behavior })
      } else {
        document.getElementById(sectionIds[pathname])?.scrollIntoView({ behavior, block: 'start' })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, state])

  return (
    <div className="continuous-page">
      <div id="inicio" className="continuous-home"><Home /></div>
      <Section id="sobre-mi" title={t('navbar_about')}><About embedded /></Section>
      <Section id="masajes" title={t('navbar_massages')}><Massages embedded /></Section>
      <Section id="tarot" title={t('navbar_tarot')}><Tarot embedded /></Section>
      <Section id="acompanamiento-emocional" title={t('navbar_emotional_support')}><AcompanamientoEmocional embedded /></Section>
      <Section id="contact" title={t('navbar_contact')}><Contact embedded /></Section>
    </div>
  )
}

export default ContinuousPage
