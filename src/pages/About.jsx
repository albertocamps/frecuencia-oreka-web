import { useTranslation } from "react-i18next";
import crystal from '../assets/crystal-retrato.jpeg';
import './About.css';

function About({ embedded = false }) {
  const { t } = useTranslation();
  const Heading = embedded ? 'h3' : 'h1';

  return (
    <div className="container">
      <div className="about-wrapper">
        
        <div className="about-overlay"></div>

        <div className="about-card">
          <div className="about-image">
            <img src={crystal} alt="Crystal" />
          </div>

          <div className="about-text">
            <header className="about-heading">
              <Heading>{t('about_title')}</Heading>
              <p className="about-location">{t('about_location')}</p>
            </header>
            <p className="about-description" dangerouslySetInnerHTML={{ __html: t('about_text') }} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
