
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Registration.css';
import { useState } from 'react';
import RegCandidateForm from './Registration/RegCandidateForm';
import RegCompanyForm from './Registration/RegCompanyForm';

const Registration = () => {

    const { t } = useTranslation();

    const [isCandidate, setIsCandidate ] = useState(true);
    const toggleCandidate = () => setIsCandidate(!isCandidate);

    return (
        <div className='row reg-form'>
            <div className="col-md-12">
                <h1>{t('nav.reg')}</h1>
            </div>
            <div className="col-md-12">
            <input type="checkbox" onChange={toggleCandidate} />
            {t('general.iAmCompany')}
            </div>
            { isCandidate ? <RegCandidateForm /> : <RegCompanyForm /> }
            <Link to={'/login'} className='reg-link' id="regLink">
                {t('mainPanel.auth.loginLink')}
            </Link>
        </div>
    )
}

export default Registration