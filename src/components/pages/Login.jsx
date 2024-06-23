import { useTranslation } from 'react-i18next';
import './Login.css';

const Login = () => {

    const { t } = useTranslation();

    return (
        <div className='row login-form'>
            <div className="col-md-12">
                <h1>{t('nav.login')}</h1>
            </div>
                <form>
                    <div className="col-md-12">
                        <input type="text" name="login" placeholder={t('mainPanel.auth.login')} />

                    </div>
                    <div className="col-md-12">
                        <input type="text" name="password" placeholder={t('mainPanel.auth.password')} />

                    </div>
                    <div className="col-md-12">
                        <input type="checkbox" name="rememberMe" /> {t('mainPanel.auth.rememberMe')}

                    </div>
                    <div className="col-md-12">
                        <button type="submit">{t('mainPanel.auth.btnLogin')}</button>
                    </div>
                    <div className="col-md-12">
                    <a href='#' className='reg-link' id="regLink">
                            {t('mainPanel.auth.regLink')}
                        </a>
                    </div>
                </form>
        </div>
    )
}

export default Login