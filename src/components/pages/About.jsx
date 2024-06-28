import { useEffect, useState } from "react";
import parseHTML from 'html-react-parser';
import { useTranslation } from "react-i18next";
import { getAboutHTML } from "../../utils/fetcher";

const About = () => {


  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  const [contents, setContents] = useState(null);

  useEffect(() => {
    getAboutHTML(currentLang).then(data => {
      setContents(data)
    })
  });

  return (
    <div>
      <h1>{t('nav.aboutUs')}</h1>
      <p>
        {contents && parseHTML(contents)}
      </p>
    </div>
  )
}

export default About