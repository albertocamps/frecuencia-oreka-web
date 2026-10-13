import { useTranslation } from 'react-i18next';
import ButtonWA from '../services/ButtonWA';
import './Tarot.css';

function Tarot({ embedded = false }) {
    const { t } = useTranslation();
    const Heading = embedded ? 'h3' : 'h1';
    return (
        <div className="container">
            <div className="section-overlay tarot-section">
                <span className="eyebrow">{t('tarot_tagline')}</span>
                <Heading>{t('tarot_title')}</Heading>
                <p dangerouslySetInnerHTML={{ __html: t('tarot_description') }} />
                <div className="buttonWA-container">
                    <ButtonWA />
                </div>
            </div>
        </div>
    );
}

export default Tarot;
