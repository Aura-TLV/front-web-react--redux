import { useTranslation } from "react-i18next";

const RegCompanyForm = () => {

    const { t } = useTranslation();

    const submitHandler = (e, finalMsg) => {
        e.preventDefault();
        alert(finalMsg);
        console.log('reg company');
    }

    return (
        <form onSubmit={e => submitHandler(e, t('mainPanel.reg.finalMessage'))}>
            <div className="col-md-12">
                <label htmlFor="name">{t('mainPanel.reg.company.name')}</label>
                <input type="text" id="name" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="profile">{t('mainPanel.reg.company.profile')}</label>
                <input type="text" id="profile" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="jobs">{t('mainPanel.reg.company.positions')}</label>
                <input type="text" id="jobs" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="workersQuantity">{t('mainPanel.reg.company.workersQuantity')}</label>
                <input type="number" id="workersQuantity" min={1} max={999} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="email">{t('mainPanel.reg.company.eMail')}</label>
                <input type="email" id="email" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="workStart">{t('mainPanel.reg.company.workingHours.start')}</label>
                <input type="time" id="workStart" defaultValue={'00:00'} />
            </div>
            <div className="col-md-12">
            <label htmlFor="workFinish">{t('mainPanel.reg.company.workingHours.finish')}</label>
            <input type="time" id="workFinish" defaultValue={'00:00'} />
            </div>
            <div className="col-md-12">
                <label htmlFor="city">{t('mainPanel.reg.company.city')}</label>
                <input type="text" id="city" required />
            </div>
            <div className="col-md-12">
            <button type="submit">{t('mainPanel.reg.btnSubmit')}</button>
            </div>
        </form>
    )
}

export default RegCompanyForm