import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import MainPanel from "./Jobs/MainPanel";
import QuestionsContacts from "./Jobs/QuestionsContacts";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';

const Jobs = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <MainPanel />
          </div>
          <div className="col-md-4">
            <QuestionsContacts />
          </div>
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

export default Jobs;