import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';
import './Login.css';
import { Link } from 'react-router-dom';
import { sendVerificationCode, authLogin } from '../../utils/fetcher';
import { useState, useEffect } from 'react';
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import changeHTMLDirection from "../../utils/changeHTMLDirection";
import FooterSection from "./About/FooterSection";
import '../../assets/styles/main.css';

const Login = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const currentLanguage = i18n.language.split('-')[0];
        changeHTMLDirection(currentLanguage);
      }, [i18n.language]);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const submitHandler = async (e, alertMsg) => {
        e.preventDefault();
     
        await sendVerificationCode(login);
        await authLogin(login, password, rememberMe);

        alert(alertMsg);
    }

    return (
        <>
            
            <section className="content footer-fixed-page">
                <div className="container">
                    <div className="row row flex-grow-1">
                        <div className="col col d-flex align-items-center justify-content-center">
                            <div className="div-register mt-3 mt-md-5">
                                <h1 className="text-center fw-bold mb-0">{t('mainPanel.auth.loginPersonalAccountH1')}</h1>
                                
                                <div className="form-decoration">
                                    <form onSubmit={e => submitHandler(e, t('mainPanel.auth.alert'))}>
                                        <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" required="" type="text"  name="login"
                                        
                                        onMouseLeave={(e) => setLogin(e.target.value)}
                                        onKeyDown={(e) => setLogin(e.target.value)}
                                        onChange={(e) => setLogin(e.target.value)}
                                        placeholder={t('mainPanel.auth.login')}/>

                                        <div className="position-relative">
                                        <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" required="" type="password"
                                        onKeyDown={(e) => setPassword(e.target.value)}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={t('mainPanel.auth.password')}
                                        />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-eye position-absolute" id="togglePassword" style={{top: '50%', right: '20px', transform: 'translateY(-50%)', width: '30px', height: '20px'}}>
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                                            </svg>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input type="checkbox"
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            name="rememberMe" className="mx-2"/> {t('mainPanel.auth.rememberMe')}
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary mt-3" type="submit">{t('mainPanel.auth.btnLogin')}</button>
                                        </div>
                                    </form>
                                    <div className="text-center mt-3">
                                        <a className="fw-semibold" href="#">{t('mainPanel.auth.foggotenMe')}</a>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center flex-md-row mt-3">
                                    
                                    <Link to='/reg' className='reg-link' id="regLink">
                            {t('mainPanel.auth.regLink')}
                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="footer">
            <FooterSection />
            </footer>
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

export default Login;