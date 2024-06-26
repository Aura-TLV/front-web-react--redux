import YoutubeVideo from "../common/YoutubeVideo";
import { useTranslation } from "react-i18next";



const HowTo = () => {

  const { t } = useTranslation();

  return (
    <div>
      <section>
        <h1>{t('nav.howTo')}</h1>

        <YoutubeVideo code={'LXb3EKWsInQ'} />
        <hr />
        {t('static.howTo')}

      </section>
    </div>
  )
}

export default HowTo