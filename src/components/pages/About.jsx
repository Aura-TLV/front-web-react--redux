import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('nav.aboutUs')}</h1>
      <p>
        {t('static.aboutUs')}
      </p>
    </div>
  )
}

export default About