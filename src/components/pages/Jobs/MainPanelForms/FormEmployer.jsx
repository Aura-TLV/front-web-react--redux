import { useTranslation } from "react-i18next";

const FormEmployer = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  const { t } = useTranslation();

  return (
    <div>
      <form onSubmit={submitHandler}>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="login">{t('mainPanel.employee.login')}:</label>
            <input id="login" />
          </div>
          <div className="col-md-3">
            <label htmlFor="eMail">{t('mainPanel.employee.eMail')}:</label>
            <input id="eMail" />
          </div>
          <div className="col-md-3">
            <label htmlFor="password">{t('mainPanel.employee.password')}:</label>
            <p><a id="password" href="#">{t('mainPanel.employee.passwordLink')}</a></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="userName">{t('mainPanel.employee.name')}:</label>
            <input id="userName" />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyName">{t('mainPanel.employee.companyName')}:</label>
            <input id="companyName" />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyType">{t('mainPanel.employee.companyType')}:</label>
            <input id="companyType" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <label htmlFor="phone">{t('mainPanel.employee.phone')}:</label>
            <input id="phone" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>{t('mainPanel.employee.yourAds.label')}:</p>
            <a href="#">{t('mainPanel.employee.yourAds.btnAdd')}</a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="submit">{t('mainPanel.employee.controls.btnSave')}</button>
          </div>
        </div>


      </form>
    </div>
  )
}

export default FormEmployer;