import { useEffect, useState } from "react";
import parseHTML from 'html-react-parser';
import YoutubeVideo from "../common/YoutubeVideo";
import { useTranslation } from "react-i18next";
import { getHTML } from "../../utils/fetcher";

const getYouTubeCode = (lang) => {
  if (lang === 'en') return 'dIo9P89X6pE';
  if (lang === 'ru') return 'Gk3tXQzCeJA';
  return 'LXb3EKWsInQ'; // for hebrew
}

const HowTo = () => {

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  const [contents, setContents] = useState(null);

  useEffect(() => {
    getHTML(currentLang).then(data => {
      setContents(data)
    })
  });

  return (
    <div>
      <section>
        <h1>{t('nav.howTo')}</h1>

        <YoutubeVideo code={getYouTubeCode(currentLang)} />
        <hr />
        {contents && parseHTML(contents)}

      </section>
    </div>
  )
}

export default HowTo