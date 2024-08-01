import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import AdvertsList from "./Adverts/AdvertsList";
import AdvertsSearch from "./Adverts/AdvertsSearch";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import { useEffect } from "react";
import changeHTMLDirection from "../../utils/changeHTMLDirection";

const Adverts = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language.split('-')[0];
    changeHTMLDirection(currentLanguage);
  }, [i18n.language]);

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <AdvertsSearch />
        </div>
        <div className="col-md-9">
          <AdvertsList />
        </div>
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

export default Adverts;