import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Registration.css';
import { useState, useEffect } from 'react';
import RegCandidateForm from './Registration/RegCandidateForm';
import RegCompanyForm from './Registration/RegCompanyForm';
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import changeHTMLDirection from "../../utils/changeHTMLDirection";
import '../../assets/styles/main.css';
import FooterSection from "./About/FooterSection";

const Registration = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const currentLanguage = i18n.language.split('-')[0];
        changeHTMLDirection(currentLanguage);
    }, [i18n.language]);

    const [isCandidate, setIsCandidate] = useState(true);

    return (
        <>
            <section className="content">
                <div className="container">
                    <div className="row flex-grow-1">
                        <div className="col d-flex align-items-center justify-content-center">
                            <div className="div-register mt-3 mt-md-5">
                                <h1 className="text-center fw-bold mb-3">{t('mainPanel.reg.regH1')}</h1>
                                <div>
                                    <div className="d-flex justify-content-center mb-4">
                                        <input 
                                            type="radio" 
                                            id="candidateRadio" 
                                            name="registrationType" 
                                            checked={isCandidate}
                                            onChange={() => setIsCandidate(true)} 
                                            className="btn-check" 
                                            autoComplete="off"
                                        />
                                        <label 
                                            className={`btn btn-outline-primary ${isCandidate ? 'active' : ''}`} 
                                            htmlFor="candidateRadio"
                                        >
                                            {t('mainPanel.reg.iamsearchJob')}
                                        </label>

                                        <input 
                                            type="radio" 
                                            id="employerRadio" 
                                            name="registrationType" 
                                            checked={!isCandidate}
                                            onChange={() => setIsCandidate(false)} 
                                            className="btn-check" 
                                            autoComplete="off"
                                        />
                                        <label 
                                            className={`btn btn-outline-primary ${!isCandidate ? 'active' : ''}`} 
                                            htmlFor="employerRadio"
                                        >
                                            {t('mainPanel.reg.iamemployee')}
                                        </label>
                                    </div>
                                    <div className="tab-content">
                                        {isCandidate ? <RegCandidateForm /> : <RegCompanyForm />}
                                        <div className="d-flex justify-content-center mt-3">
                                        <Link to={'/login'} className='reg-link' id="regLink">
                                            {t('mainPanel.auth.loginLink')}
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

export default Registration;