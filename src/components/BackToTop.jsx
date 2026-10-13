import { useSyncExternalStore } from 'react'
import { useTranslation } from 'react-i18next'
import './BackToTop.css'

function subscribe(callback) {
  window.addEventListener('scroll', callback, { passive: true })
  return () => window.removeEventListener('scroll', callback)
}

function getSnapshot() {
  return window.scrollY > 240
}

export default function BackToTop() {
  const { t } = useTranslation()
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false)
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    document.querySelector('.nav-brand')?.focus({ preventScroll: true })
  }
  return (
    <button
      type="button"
      className={`floating-back-top${visible ? ' is-visible' : ''}`}
      aria-label={t('footer_back_top')}
      title={t('footer_back_top')}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={goToTop}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </button>
  )
}
