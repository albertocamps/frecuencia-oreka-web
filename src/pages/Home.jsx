import { useTranslation } from 'react-i18next';
import ButtonWA from '../services/ButtonWA';
import homeVideoDesktop from '../assets/home-hero-desktop.mp4';
import homeVideoMobile from '../assets/home-hero-mobile.mp4';
import homeVideoPoster from '../assets/home-hero-poster.jpg';
import './Home.css';

function Home() {
  const { t } = useTranslation();
  return (
    <section className="container home-container">
      <div className="home-hero">
        <video
          className="home-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={homeVideoPoster}
          aria-hidden="true"
          tabIndex="-1"
        >
          <source media="(max-width: 680px)" src={homeVideoMobile} type="video/mp4" />
          <source src={homeVideoDesktop} type="video/mp4" />
        </video>
        <div className="home-hero-content">
          <span className="home-hero-eyebrow" translate="no">Date el gusto</span>
        <h1>{t('home_title')}</h1>
        <p>{t('home_description')}</p>
        <div className="home-actions">
          <ButtonWA />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
