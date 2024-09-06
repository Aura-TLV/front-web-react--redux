import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import { useEffect } from "react";
import changeHTMLDirection from "../../utils/changeHTMLDirection";
import FilterSection from "./Jobs/FilterSection";
import SubscribeSection from "./About/SubscribeSection";
import FilterListSection from "./Jobs/FilterListSection";
import VideoGuideSection from "./Jobs/VideoGuideSection";
import FilterListOpenSection from "./Jobs/FilterListOpenSection";
import FilterListAnotherSection from "./Jobs/FilterListAnotherSection";
import FilterListUnderFormSection from "./Jobs/FilterListUnderFormSection";
import FormSearchResumeSection from "./Jobs/FormSearchResumeSection";
import FooterSection from "./About/FooterSection";
import { Container } from 'react-bootstrap';

const Jobs = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language.split('-')[0];
    changeHTMLDirection(currentLanguage);
  }, [i18n.language]);

  return (
    <>
      <hr className="p-0" />

      <Container>
        <div className="container mt-1 mt-md-5">
          <div className="row">
            <FilterSection />
            <div className="col-lg-9">
              <VideoGuideSection />
              <FilterListSection />
              <FilterListOpenSection />
              <FilterListAnotherSection />
            </div>
          </div>
        </div>
      </Container>

      <FormSearchResumeSection />

      <Container>
        <div className="col-md-3 col-lg-3 mb-5 d-md-mb-0">

        </div>
      <div className="col offset-lg-3">
      <FilterListUnderFormSection />
      </div>
        <div>
          <SubscribeSection />
        </div>
        <FooterSection />
      </Container>

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
  );
}

export default Jobs;
