import ServicesCard from './ServicesCard';
import massages from '../services/massages'
import { useTranslation } from 'react-i18next';
import './Massages.css'

function Massages({ embedded = false }) {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="section-overlay massages-section">
                <div className="services-heading">
                    <span className="eyebrow">{t('wellbeing_tagline')}</span>
                    {!embedded && <h1>{t('navbar_massages')}</h1>}
                    <p>{t('massages_intro')}</p>
                </div>
                <div className='massages-container'>
                    {massages.map(massage => (
                        <ServicesCard key={massage.id} {...massage} compact={embedded} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Massages;
