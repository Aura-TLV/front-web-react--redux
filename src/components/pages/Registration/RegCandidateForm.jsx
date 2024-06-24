import { useTranslation } from "react-i18next";



const RegCandidateForm = () => {

    const { t } = useTranslation();

    const submitHandler = (e, finalMsg) => {
        e.preventDefault();
        alert(finalMsg);
        console.log('reg candidate');
    }

    return (
        <form onSubmit={e => submitHandler(e, t('mainPanel.reg.finalMessage'))}>
            <div className="col-md-12">
                <label htmlFor="name">{t('mainPanel.reg.candidate.name')}</label>
                <input type="text" id="name" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="age">{t('mainPanel.reg.candidate.age')}</label>
                <input type="number" id="age" min={16} max={89} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="email">{t('mainPanel.reg.candidate.eMail')}</label>
                <input type="email" id="email" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="phone">{t('mainPanel.reg.candidate.phone')}</label>
                <input type="text" id="phone" />
            </div>
            <div className="col-md-12">
                <label htmlFor="status">{t('mainPanel.reg.candidate.status.label')}</label>
                <select name="status" id="status">
                    <option value="teudat-zeut">{t('mainPanel.reg.candidate.status.t1')}</option>
                    <option value="work-visa">{t('mainPanel.reg.candidate.status.t2')}</option>
                    <option value="tour-visa">{t('mainPanel.reg.candidate.status.t3')}</option>
                    <option value="blue-paper">{t('mainPanel.reg.candidate.status.t4')}</option>
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="vacancy">{t('mainPanel.reg.candidate.vacancy')}</label>
                <input type="text" id="vacancy" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="city">{t('mainPanel.reg.candidate.city')}</label>
                <input type="text" id="city" />
            </div>
            <div className="col-md-12">
                <button type="submit">{t('mainPanel.reg.btnSubmit')}</button>
            </div>
        </form>
    )
}

export default RegCandidateForm