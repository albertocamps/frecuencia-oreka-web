import { useTranslation } from "react-i18next";
import ButtonWA from '../services/ButtonWA';
import './AcompanamientoEmocional.css';

function AcompañamientoEmocional({ embedded = false }) {
    const { t } = useTranslation();
    const Heading = embedded ? 'h3' : 'h1';
    return (
        <div className="container">
            <div className="section-overlay emotional-support-section">
                <span className="eyebrow">Escucha · Cuidado · Equilibrio</span>
                <Heading>{t('emotional_support_title')}</Heading>
                <p dangerouslySetInnerHTML={{ __html: t('emotional_support_description') }} />
                <div className="buttonWA-container">
                    <ButtonWA />
                </div>
            </div>
        </div>
    );
}

export default AcompañamientoEmocional;
