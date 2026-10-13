import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="section-overlay not-found">
        <span className="eyebrow">404</span>
        <h1>{t('not_found_title')}</h1>
        <p>{t('not_found_description')}</p>
        <Link className="btn-whatsapp" to="/">{t('not_found_back')}</Link>
      </div>
    </section>
  );
}

export default NotFound;