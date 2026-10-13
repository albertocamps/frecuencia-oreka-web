import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FrecuenciaOrekaNavbar from '../assets/FrecuenciaOrekaNavbar.png';
import './Navbar.css';

const sectionIds = {
  '/': 'inicio',
  '/sobre-mi': 'sobre-mi',
  '/masajes': 'masajes',
  '/tarot': 'tarot',
  '/acompanamiento-emocional': 'acompanamiento-emocional',
  '/contact': 'contact',
};

function Navbar({ compact }) {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState(pathname);

  useEffect(() => {
    if (!compact || !Object.hasOwn(sectionIds, pathname)) return;

    const updateVisibleSection = () => {
      const threshold = Math.min(window.innerHeight * .3, 220);
      let current = '/';
      for (const [path, id] of Object.entries(sectionIds)) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) current = path;
      }
      setVisibleSection(current);
    };

    const frame = requestAnimationFrame(updateVisibleSection);
    window.addEventListener('scroll', updateVisibleSection, { passive: true });
    window.addEventListener('resize', updateVisibleSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateVisibleSection);
      window.removeEventListener('resize', updateVisibleSection);
    };
  }, [compact, pathname]);

  const navItems = [
    { to: '/', label: t('navbar_home'), end: true },
    { to: '/sobre-mi', label: t('navbar_about') },
    { to: '/masajes', label: t('navbar_massages') },
    { to: '/tarot', label: t('navbar_tarot') },
    { to: '/acompanamiento-emocional', label: t('navbar_emotional_support') },
    { to: '/contact', label: t('navbar_contact') },
  ];

  const closeAndNavigate = (to) => {
    setMenuOpen(false);
    setVisibleSection(to);
    if (compact && window.location.pathname === to) {
      document.getElementById(sectionIds[to])?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    }
  };

  const renderLink = ({ to, label, end }) => (
    <li key={to}>
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) => `nav-link${(compact && Object.hasOwn(sectionIds, pathname) ? visibleSection === to : isActive) ? ' is-active' : ''}`}
        onClick={() => closeAndNavigate(to)}
      >
        {label}
      </NavLink>
    </li>
  );

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-compact" aria-label="Navegación principal">
      <div className="nav-container">
        <NavLink
          to="/"
          end
          className="nav-brand"
          aria-label="Frecuencia Oreka"
          onClick={() => closeAndNavigate('/')}
        >
          <img className="navLogo" src={FrecuenciaOrekaNavbar} alt="" />
        </NavLink>

        <ul className="nav-group">
          {navItems.map(renderLink)}
        </ul>

        <div className="lang-switch" aria-label="Idioma">
          {['es', 'en'].map((language) => (
            <button
              type="button"
              key={language}
              className={i18n.language.startsWith(language) ? 'is-active' : ''}
              aria-pressed={i18n.language.startsWith(language)}
              onClick={() => changeLanguage(language)}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <ul
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? ' is-open' : ''}`}
      >
        {navItems.map(renderLink)}
      </ul>
    </nav>
  );
}

export default Navbar;
