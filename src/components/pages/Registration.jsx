import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Registration.css';
import { useState, useEffect } from 'react';
import RegCandidateForm from './Registration/RegCandidateForm';
import RegCompanyForm from './Registration/RegCompanyForm';
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import changeHTMLDirection from "../../utils/changeHTMLDirection";

const Registration = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const currentLanguage = i18n.language.split('-')[0];
        changeHTMLDirection(currentLanguage);
    }, [i18n.language]);

    const [isCandidate, setIsCandidate] = useState(true);
    const toggleCandidate = () => setIsCandidate(!isCandidate);

    return (
        <>
            <div className='row reg-form'>
                <div className="col-md-12">
                    <h1>{t('nav.reg')}</h1>
                </div>
                <div className="col-md-12">
                    <input type="checkbox" onChange={toggleCandidate} />
                    {t('general.iAmCompany')}
                </div>
                {isCandidate ? <RegCandidateForm /> : <RegCompanyForm />}
                <Link to={'/login'} className='reg-link' id="regLink">
                    {t('mainPanel.auth.loginLink')}
                </Link>
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

export default Registration;