import { useTranslation } from 'react-i18next';

const ButtonWA = () => {
  const { t } = useTranslation();

  return (
    <a
      className="btn-whatsapp"
      href="https://wa.me/34623028832"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('button_reserve')}
    </a>
  );
};

export default ButtonWA;