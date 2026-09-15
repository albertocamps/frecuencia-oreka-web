import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/FrecuenciaOrekaLogo.png';
import './Footer.css';

function FooterIcon({ name }) {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>}
      {name === 'pin' && <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
      {name === 'whatsapp' && <g strokeWidth="1.6" strokeLinecap="butt" strokeLinejoin="miter"><path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.8L4 20l1.3-4.5a8 8 0 1 1 14.7-4Z" /><path d="M8.5 7.5c-.8 3.8 2.2 6.8 6 7l1-2-2-1-1 1a6 6 0 0 1-2-2l1-1-1-2Z" /></g>}
      {name === 'clock' && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
      {name === 'up' && <path d="M12 19V5m-6 6 6-6 6 6" />}
    </svg>
  );
}

function Footer() {
  const { t } = useTranslation();
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector('.navbar a')?.focus({ preventScroll: true });
  };

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link" aria-label={t('navbar_home')}>
              <span className="footer-symbol" aria-hidden="true">
                <img src={logo} alt="" width="431" height="579" className="footer-logo" />
              </span>
              <span className="footer-brand-copy">
                <span translate="no">Frecuencia Oreka</span>
                <span className="footer-tagline">{t('footer_tagline')}</span>
              </span>
            </Link>
            <a className="footer-link" href="https://www.instagram.com/frecuencia_oreka/" target="_blank" rel="noopener noreferrer">
              <FooterIcon name="instagram" /><span>@frecuencia_oreka</span><span aria-hidden="true">↗</span>
            </a>
          </div>

          <section className="footer-section" aria-labelledby="footer-location-title">
            <h2 id="footer-location-title">{t('footer_find_me')}</h2>
            <address>
              <strong translate="no">Eguzkiloreak</strong>
              <a className="footer-address" href="https://maps.app.goo.gl/zXKb3Aora9sdzo2MA" target="_blank" rel="noopener noreferrer">
                Calle Pasajes, 5 · Gros<br />20015 Donostia – San Sebastián
              </a>
            </address>
            <a className="footer-link" href="https://maps.app.goo.gl/zXKb3Aora9sdzo2MA" target="_blank" rel="noopener noreferrer">
              <FooterIcon name="pin" /><span>{t('contact_directions')}</span><span aria-hidden="true">↗</span>
            </a>
            <p className="footer-appointment"><FooterIcon name="clock" />{t('footer_appointment')}</p>
          </section>

          <section className="footer-section" aria-labelledby="footer-talk-title">
            <h2 id="footer-talk-title">{t('footer_talk')}</h2>
            <p>{t('footer_invitation')}</p>
            <a className="footer-whatsapp" href="https://wa.me/34623028832" target="_blank" rel="noopener noreferrer">
              <FooterIcon name="whatsapp" /><span>{t('footer_whatsapp')}</span><span aria-hidden="true">↗</span>
            </a>
            <span className="footer-phone">+34 623 028 832</span>
            <Link className="footer-link" to="/contact">{t('navbar_contact')}<span aria-hidden="true">→</span></Link>
          </section>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} <span translate="no">Frecuencia Oreka</span></small>
          <button className="footer-back-top" type="button" onClick={goToTop}>{t('footer_back_top')}<FooterIcon name="up" /></button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
