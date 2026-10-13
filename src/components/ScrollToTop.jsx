import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const sectionPaths = ['/', '/sobre-mi', '/masajes', '/tarot', '/acompanamiento-emocional', '/contact']

function ScrollToTop({ compact }) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (compact && sectionPaths.includes(pathname)) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [compact, pathname])

  return null
}

export default ScrollToTop
