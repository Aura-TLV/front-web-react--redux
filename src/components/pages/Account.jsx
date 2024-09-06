import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
//import MainPanel from "./Jobs/MainPanel";
import MainPanelAccount from "./Account/MainPanelAccount";
import QuestionsContacts from "./Account/QuestionsContacts";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import changeHTMLDirection from "../../utils/changeHTMLDirection";
import FooterSection from "./About/FooterSection";

import '../../assets/styles/main.css';

const Jobs = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language.split('-')[0];
    changeHTMLDirection(currentLanguage);
  }, [i18n.language]);

  return (
    <>
      <div className="container mt-1 mt-md-5">
      <div className="row mb-4">
                <div className="col">
                    <h1 className="fw-bold">{t('personalAccount.title')}</h1>
                </div>
            </div>
        <div className="row">
          <div className="col-lg-9">
            <MainPanelAccount />
          </div>
          <div className="col-lg-3" style={{position: 'relative'}}>
            <QuestionsContacts />
          </div>
        </div>
      </div>
      <FooterSection />
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

export default Jobs;