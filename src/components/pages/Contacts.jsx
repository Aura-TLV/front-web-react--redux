import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import changeHTMLDirection from "../../utils/changeHTMLDirection";

const Contacts = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language.split('-')[0];
    changeHTMLDirection(currentLanguage);
  }, [i18n.language]);

  return (
    <>
      <div>
        <h1>{t('nav.contacts')}</h1>
        <p>
          <a className="contactFormLink" href="https://wa.me/972535220057?text=%2Fstart" target="_blank">
            {t('static.contacts.whatsapp')}
          </a>
        </p>
        <p><a className="contactFormLink" href="https://t.me/avielhelper_bot" target="_blank">
          {t('static.contacts.telegram')}
        </a></p>
        <p><a className="contactFormLink" href="https://b24-cfumk4.bitrix24site.ru/crm_form_wgyxv/" target="_blank">
          {t('static.contacts.form')}
        </a></p>
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

export default Contacts;