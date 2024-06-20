import YoutubeVideo from "../common/YoutubeVideo";
import { useTranslation } from "react-i18next";



const HowTo = () => {

  const { t } = useTranslation();

  return (
    <div>
      <section>
        <h1>{t('nav.howTo')}</h1>

        <YoutubeVideo src={'z1QtRbKq8Tw'} />
        <hr />
        {t('static.howTo')}

      </section>
    </div>
  )
}

export default HowTo