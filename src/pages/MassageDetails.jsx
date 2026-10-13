import { Link, useLocation, useParams } from "react-router-dom";
import massages from "../services/massages";
import ButtonWA from "../services/ButtonWA";
import NotFound from './NotFound';
import { useTranslation } from 'react-i18next';
import './MassageDetails.css';
import useCompactLayout from '../hooks/useCompactLayout';

function MassageDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    const location = useLocation();
    const compact = useCompactLayout();
    const backState = compact && Number.isFinite(location.state?.returnScrollY)
        ? { restoreScrollY: location.state.returnScrollY }
        : null;
    
    const massage = massages.find(m => m.id === id?.toLowerCase());

    if(!massage) {
        return <NotFound />;
    }

    const isHolistic = massage.id === 'masaje-holistico';
    const isAyurveda = massage.id === 'masaje-ayurveda';
    const isQuiromasaje = massage.id === 'quiromasaje';
    const isLegs = massage.id === 'masaje-piernas';
    const isSonotherapy = massage.id === 'massage_sonotherapy_title';
    const isNewMassage = ['masaje-piedras-calientes', 'masaje-ventosas', 'quiromasaje-deportivo'].includes(massage.id);
    const optionPrefix = isNewMassage ? 'quiromasaje' : isAyurveda ? 'massage_ayurveda' : isQuiromasaje ? 'quiromasaje' : isLegs ? 'massage_legs' : isSonotherapy ? 'massage_sonotherapy' : 'massage_holistic';
    const massageOptions = [
        { duration: `${optionPrefix}_option_50`, price: '60€' },
        { duration: `${optionPrefix}_option_60`, price: '65€' },
        { duration: `${optionPrefix}_option_75`, price: '70€', badge: isNewMassage || isQuiromasaje || isLegs || isSonotherapy ? null : `${optionPrefix}_selected` },
        { duration: `${optionPrefix}_option_90`, price: '80€', badge: isNewMassage || isAyurveda || isQuiromasaje || isLegs || isSonotherapy ? null : 'massage_holistic_deep' },
        { duration: `${optionPrefix}_option_120`, price: '130€', badge: isAyurveda ? 'massage_ayurveda_ritual' : null },
    ];

    return ( 
        <div className="container">
            <div 
                className="section-overlay massage-details"
                style={{ backgroundImage: `url(${massage.img})` }}
            >
                <div className="massage-detail-content">
                    <Link className="back-to-massages" to="/masajes" state={backState}>← {t('back_to_massages')}</Link>
                    <span className="eyebrow">{t('wellbeing_tagline')}</span>
                    <h1>{t(massage.name)}</h1>
                    <p className="massage-detail-description" dangerouslySetInnerHTML={{ __html: t(massage.description) }} />
                    {isHolistic ? <div className="massage-benefits">
                        <h2>{t('massage_holistic_benefits_title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('massage_holistic_benefits') }} />
                    </div> : !isNewMassage && <p className="massage-ayurveda-intro">{t(isAyurveda ? 'massage_ayurveda_intro' : isQuiromasaje ? 'quiromasaje_intro' : isLegs ? 'massage_legs_intro' : 'massage_sonotherapy_intro')}</p>}
                    {!isNewMassage && !isQuiromasaje && !isLegs && <p className="massage-adaptation" dangerouslySetInnerHTML={{ __html: isHolistic ? t('massage_holistic_adaptation') : isAyurveda ? t('massage_ayurveda_phrase') : t('massage_sonotherapy_phrase') }} />}
                    <div className="massage-options">
                        <h2>{t(isAyurveda ? 'massage_ayurveda_options_title' : isQuiromasaje ? 'quiromasaje_options_title' : isLegs ? 'massage_legs_options_title' : isSonotherapy ? 'massage_sonotherapy_options_title' : 'massage_holistic_options_title')}</h2>
                        <div className="massage-option-grid">
                            {massageOptions.map((option) => (
                                <div className={`massage-option ${option.badge ? 'is-highlighted' : ''}`} key={option.duration}>
                                    {option.badge && <span>{t(option.badge)}</span>}
                                    <strong>{t(option.duration)}</strong>
                                    <b>{option.price}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="massage-location">📍 {t(isAyurveda ? 'massage_ayurveda_location' : isQuiromasaje ? 'quiromasaje_location' : isLegs ? 'massage_legs_location' : isSonotherapy ? 'massage_sonotherapy_location' : 'massage_holistic_location')}</p>
                </div>
                <div className="buttonWA-container">
                    <ButtonWA />
                </div>
            </div>
        </div>
    );
}

export default MassageDetails;
