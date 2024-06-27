import { useEffect, useState } from "react";
import parseHTML from 'html-react-parser';
import YoutubeVideo from "../common/YoutubeVideo";
import { useTranslation } from "react-i18next";
import { getHTML } from "../../utils/fetcher";


const HowTo = () => {

  const { t, i18n } = useTranslation();

  const [contents, setContents] = useState(null);

  useEffect(() => {
    const currentLang = i18n.language.split('-')[0];
    getHTML(currentLang).then(data => {
      setContents(data)
    })
  });

  return (
    <div>
      <section>
        <h1>{t('nav.howTo')}</h1>

        <YoutubeVideo code={'LXb3EKWsInQ'} />
        <hr />
        {contents && parseHTML(contents)}

      </section>
    </div>
  )
}

export default HowTo