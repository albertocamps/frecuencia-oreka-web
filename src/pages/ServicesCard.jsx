import ButtonWA from "../services/ButtonWA";
import { Link, useNavigate } from 'react-router-dom';
import './ServicesCard.css';
import { useTranslation } from "react-i18next";

function ServicesCard({id, name, img, compact = false}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const Heading = compact ? 'h3' : 'h2';

    const openDetails = (event) => {
        if (!compact || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigate(`/masajes/${id}`, { state: { returnScrollY: window.scrollY } });
    };

    return (
        <article className={`service-card${compact ? ' service-card--compact' : ''}`}>
            <Link to={`/masajes/${id}`} onClick={openDetails}>
                {compact && <img src={img} alt="" loading="lazy" decoding="async" />}
                <Heading>{t(name)}</Heading>
                {!compact && <img src={img} alt="" loading="lazy" decoding="async" />}
                {compact && <span className="service-card-more">{t('massage_view_details')} <span aria-hidden="true">↗</span></span>}
            </Link>
            {!compact && <ButtonWA />}
        </article>
    );
}

export default ServicesCard;
