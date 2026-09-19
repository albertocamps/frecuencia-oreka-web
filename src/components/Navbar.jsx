import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FrecuenciaOrekaNavbar from '../assets/FrecuenciaOrekaNavbar.png';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: t('navbar_home'), end: true },
    { to: '/sobre-mi', label: t('navbar_about') },
    { to: '/masajes', label: t('navbar_massages') },
    { to: '/tarot', label: t('navbar_tarot') },
    { to: '/acompanamiento-emocional', label: t('navbar_emotional_support') },
    { to: '/contact', label: t('navbar_contact') },
  ];

  const renderLink = ({ to, label, end }) => (
    <li key={to}>
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
        onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen(false)}
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