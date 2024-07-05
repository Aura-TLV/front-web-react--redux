import { useEffect, useState } from "react";
import parseHTML from 'html-react-parser';
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { getAboutHTML } from "../../utils/fetcher";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';

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
    <>
      <div>
        <h1>{t('nav.aboutUs')}</h1>
        <p>
          {contents && parseHTML(contents)}
        </p>
      </div>
      <CookieConsent
        location="bottom"
        buttonText={t('cookies.btnOK')}
        cookieName={COOKIE_ACCEPTED_NAME}
        style={COOKIE_ACCEPTED_STYLE}
        buttonStyle={COOKIE_ACCEPTED_BTN_STYLE}
        expires={COOKIE_EXPIRES_DAYS}
      >
        {t('cookies.message')}
      </CookieConsent>
    </>
  )
}

export default About;