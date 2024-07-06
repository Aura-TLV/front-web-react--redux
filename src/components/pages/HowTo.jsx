import { useEffect, useState } from "react";
import parseHTML from 'html-react-parser';
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import YoutubeVideo from "../common/YoutubeVideo";
import { getHTML } from "../../utils/fetcher";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';

const getYouTubeCode = (lang) => {
  if (lang === 'en') return 'dIo9P89X6pE';
  if (lang === 'ru') return 'Gk3tXQzCeJA';
  if (lang === 'uk') return 'CVTEMMrEMmQ';
  if (lang === 'ar') return 'KLcVz1tWjj8';
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
    <>
      <div>
        <section>
          <h1>{t('nav.howTo')}</h1>

          <YoutubeVideo code={getYouTubeCode(currentLang)} />
          <hr />
          {contents && parseHTML(contents)}

        </section>
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

export default HowTo;