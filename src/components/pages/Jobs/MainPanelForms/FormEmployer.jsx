import { useTranslation } from "react-i18next";

const FormEmployer = () => {

  const passwordLinkHandler = (e, msg) => {
    e.preventDefault();
    alert(msg);
  }

  const adsLimitHandler = (e, msg) => {
    e.preventDefault();
    alert(msg);
}

  const submitHandler = (e, msg) => {
    e.preventDefault();
    alert(msg);
  }

  const { t } = useTranslation();

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e, t('mainPanel.company.formSubmitMsg'))}>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="login">{t('mainPanel.company.login')}:</label>
            <input id="login" />
          </div>
          <div className="col-md-3">
            <label htmlFor="eMail">{t('mainPanel.company.eMail')}:</label>
            <input id="eMail" />
          </div>
          <div className="col-md-3">
            <label htmlFor="password">{t('mainPanel.company.password')}:</label>
            <p><a id="password" onClick={(e) => passwordLinkHandler(e, t('mainPanel.company.passwordResetSent'))} href="#">{t('mainPanel.company.passwordLink')}</a></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="userName">{t('mainPanel.company.name')}:</label>
            <input id="userName" />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyName">{t('mainPanel.company.companyName')}:</label>
            <input id="companyName" />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyType">{t('mainPanel.company.companyType')}:</label>
            <input id="companyType" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <label htmlFor="phone">{t('mainPanel.company.phone')}:</label>
            <input id="phone" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>{t('mainPanel.company.yourAds.label')}:</p>
            <a href="#" onClick={(e) => adsLimitHandler(e, t('mainPanel.company.yourAds.btnAddMessageLimit'))}>{t('mainPanel.company.yourAds.btnAdd')}</a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="submit">{t('mainPanel.company.controls.btnSave')}</button>
          </div>
        </div>


      </form>
    </div>
  )
}

export default FormEmployer;