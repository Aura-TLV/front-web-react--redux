import { useTranslation } from 'react-i18next';
import './Login.css';
import { Link } from 'react-router-dom';
import { sendVerificationEmail, authLogin } from '../../utils/fetcher';
import { useState } from 'react';

const Login = () => {

    const { t } = useTranslation();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);



    const submitHandler = async (e, alertMsg) => {
        e.preventDefault();
        await sendVerificationEmail(login);
        await authLogin(login, password, rememberMe);

        alert(alertMsg);
    }

    return (
        <div className='row login-form'>
            <div className="col-md-12">
                <h1>{t('nav.login')}</h1>
            </div>
                <form onSubmit={e => submitHandler(e, t('mainPanel.auth.alert'))}>
                    <div className="col-md-12">
                        <input type="text" name="login"
                        onMouseLeave={(e) => setLogin(e.target.value)}
                        onKeyDown={(e) => setLogin(e.target.value)}
                        onChange={(e) => setLogin(e.target.value)} 
                    placeholder={t('mainPanel.auth.login')} />

                    </div>
                    <div className="col-md-12">
                        <input type="password" name="password" 
                        onKeyDown={(e) => setPassword(e.target.value)}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t('mainPanel.auth.password')} />

                    </div>
                    <div className="col-md-12">
                        <input type="checkbox"
                        onChange={(e) => setRememberMe(e.target.checked)}
                        name="rememberMe" /> {t('mainPanel.auth.rememberMe')}

                    </div>
                    <div className="col-md-12">
                        <button type="submit">{t('mainPanel.auth.btnLogin')}</button>
                    </div>
                    <div className="col-md-12">
                    <Link to='/reg' className='reg-link' id="regLink">
                            {t('mainPanel.auth.regLink')}
                        </Link>
                    </div>
                </form>
        </div>
    )
}

export default Login