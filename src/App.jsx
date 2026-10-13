import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RoutesApp from './routes/RoutesApp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import massages from './services/massages'
import useCompactLayout from './hooks/useCompactLayout'

import './App.css'
import './redesign.css'

function App() {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const compact = useCompactLayout()

  useEffect(() => {
    const isEnglish = i18n.language.startsWith('en')
    const section = pathname.startsWith('/masajes/') ? '/masajes' : pathname
    const titles = {
      '/sobre-mi': t('navbar_about'),
      '/masajes': t('navbar_massages'),
      '/tarot': t('navbar_tarot'),
      '/acompanamiento-emocional': t('navbar_emotional_support'),
      '/contact': t('navbar_contact'),
    }
    const massage = pathname.startsWith('/masajes/')
      ? massages.find((item) => pathname === `/masajes/${item.id}`)
      : null
    const pageTitle = pathname.startsWith('/masajes/')
      ? massage ? t(massage.name) : t('not_found_title')
      : titles[section] || t('not_found_title')

    document.documentElement.lang = isEnglish ? 'en' : 'es'
    document.title = section === '/'
      ? `Frecuencia Oreka | ${isEnglish ? 'Wellbeing in Donostia' : 'Bienestar en Donostia'}`
      : `${pageTitle} | Frecuencia Oreka`

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.content = isEnglish
        ? 'Frecuencia Oreka: a space to listen to yourself and care for yourself in Donostia – San Sebastián. Massages, sound therapy and support.'
        : 'Frecuencia Oreka: un espacio para escucharte y cuidar de ti en Donostia – San Sebastián. Masajes, sonoterapia y acompañamiento.'
    }
  }, [i18n.language, pathname, t])

  return (
    <>
      <a className="skip-link" href="#main-content">{t('skip_to_content')}</a>
      <ScrollToTop compact={compact} />
      <Navbar compact={compact} />
      <main id="main-content">
        <RoutesApp compact={compact} />
      </main>
      <Footer compact={compact} />
      {compact && <BackToTop />}
    </>
  )
}

export default App
