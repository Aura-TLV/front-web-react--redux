import { useDispatch, useSelector } from 'react-redux';
import { toggleCity } from '../../../../redux/slices/candidateSlice'; // Импорт экшена Redux
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import './FormCandidate.css';
import '../../../../assets/styles/main.css';
import '../../../../assets/js/input-tel-clear.js';
import '../../../../assets/js/input-clear.js';

const FormEmployer = () => {
  const dispatch = useDispatch();
  const { selectedCity } = useSelector(state => state.candidate);  // Получаем значения из Redux
  const [isVisible, setIsVisible] = useState(false);  // Состояние для управления видимостью скрытого блока

  const toggleVisibility = () => {
    setIsVisible(!isVisible);  // Переключение видимости скрытого блока
  };

  const { t } = useTranslation();

  const handleToggleCity = (city) => {
    dispatch(toggleCity(city));  // Обновляем выбранные города через Redux
  };

  const submitHandler = (e, msg) => {
    e.preventDefault();
    alert(msg);
  };

  return (
    <div>
      <div className="col mb-5">
        <div className="form-decoration">
          <form onSubmit={(e) => submitHandler(e, t('mainPanel.company.formSubmitMsg'))}>
            <div className="row d-flex flex-column flex-lg-row">
              <div className="col-lg-4 d-flex flex-column mb-4">
                <label htmlFor="login" className="form-label fw-bold">{t('mainPanel.company.login')}:</label>
                <span id="login">Rabota2024</span>
              </div>
              <div className="col-lg-4 d-flex flex-column mb-4">
                <label htmlFor="eMail" className="form-label fw-bold">{t('mainPanel.company.eMail')}:</label>
                <a className="link-dark" id="eMail" href="mailto:Rabota24@gmail.com">Rabota24@gmail.com</a>
              </div>
              <div className="col-lg-4 d-flex flex-column mb-4">
                <label htmlFor="password" className="form-label fw-bold">{t('mainPanel.company.password')}:</label>
                <span className="fw-semibold d-lg-none d-xl-block">
                  <a id="password" onClick={(e) => submitHandler(e, t('mainPanel.company.passwordResetSent'))} href="#">{t('mainPanel.company.passwordLink')}</a>
                </span>
                <span className="fw-semibold d-none d-lg-block d-xl-none">
                  <a id="password" onClick={(e) => submitHandler(e, t('mainPanel.company.passwordResetSent'))} href="#">{t('mainPanel.company.passwordLink')}</a>
                </span>
              </div>

              <div className="col-lg-4 mb-4">
                <label htmlFor="userName" className="form-label fw-bold">{t('mainPanel.company.name')}:</label>
                <input className="form-control" id="userName" type="text" placeholder={t('companyAccount.name')} />
              </div>
              <div className="col-lg-4 mb-4">
                <label htmlFor="companyName" className="form-label fw-bold">{t('mainPanel.company.companyName')}:</label>
                <input className="form-control" id="companyName" type="text" placeholder={t('companyAccount.nameCompany')} />
              </div>
              <div className="col-lg-12 col-xl-4 mb-4">
                <label htmlFor="companyType" className="form-label fw-bold">{t('mainPanel.company.companyType')}</label>
                <select className="form-select border-0 text-muted" id="companyType" defaultValue="12">
                  <option value="12">{t('companyAccount.typeBusiness.01')}</option>
                  <option value="13">{t('companyAccount.typeBusiness.02')}</option>
                  <option value="14">{t('companyAccount.typeBusiness.03')}</option>
                  <option value="14">{t('companyAccount.typeBusiness.04')}</option>
                  <option value="14">{t('companyAccount.typeBusiness.05')}</option>
                </select>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6 col-xl-4 mb-4">
                    <label htmlFor="phone" className="form-label fw-bold">{t('mainPanel.company.phone')}:</label>
                    <input className="form-control" id="phone" type="tel" pattern="05\d{1}[-\s]*\d{3}[-\s]*\d{4}" required="" inputMode="tel" placeholder={t('companyAccount.phone')} />
                  </div>
                </div>
              </div>

              {/* Скрытый блок, видимость которого управляется состоянием */}
              {isVisible && (
                <div className="col-12">
                  <div className="row additional-fields">
                    <div className="col-12 d-flex flex-column mt-3">
                      <label className="col-form-label fw-semibold d-none d-lg-block">{t('mainPanel.company.yourAds.label')}</label>
                    </div>
                    <div className="col-12 d-flex flex-column mb-5 mt-3">
                      <div className="d-flex">
                        <div className="dropdown">
                          <button className="btn btn-primary btn-lg dropdown-toggle text-nowrap" aria-expanded="false" data-bs-toggle="dropdown" type="button">{t('companyAccount.yourAdds.01')}&nbsp;</button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.01')} </a>
                            <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.02')}</a>
                            <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.03')}</a>
                            <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.04')}</a>
                          </div>
                        </div>
                        <button className="btn btn-danger text-nowrap rounded-pill ms-3" type="button">{t('companyAccount.delAnons')} 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x-lg ms-2">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Поля формы внутри скрытого блока */}
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.company.job')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="12">
                        <option value="12">{t('professions.01')}</option>
                        <option value="13">{t('professions.02')}</option>
                        <option value="14">{t('professions.03')}</option>
                        <option value="12">{t('professions.04')}</option>
                        <option value="13">{t('professions.05')}</option>
                        <option value="14">{t('professions.06')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.company.city')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue={t('cities.0')}>
                        <option value="1">{t('cities.1')}</option>
                        <option value="2">{t('cities.2')}</option>
                        <option value="3">{t('cities.3')}</option>
                        <option value="4">{t('cities.4')}</option>
                        <option value="5">{t('cities.5')}</option>
                        <option value="6">{t('cities.6')}</option>
                      </select>
                    </div>

                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.company.age')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="12">
                        <option value="12" >{t('companyAccount.age.1')}</option>
                        <option value="13">{t('companyAccount.age.2')}</option>
                        <option value="14">{t('companyAccount.age.3')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.company.experience')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="12">
                        <option value="12">{t('companyAccount.experience.1')}</option>
                        <option value="12">{t('companyAccount.experience.2')}</option>
                        <option value="12">{t('companyAccount.experience.3')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.company.status.label')}</label>
                      <select className="form-select border-0 text-muted" defaultValue="t1">
                        <option value="t1">{t('mainPanel.company.status.t1')}</option>
                        <option value="t2">{t('mainPanel.company.status.t2')}</option>
                        <option value="t3">{t('mainPanel.company.status.t3')}</option>
                        <option value="t4">{t('mainPanel.company.status.t4')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.company.language')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="12">
                        <option value="12">{t('companyAccount.language.1')}</option>
                        <option value="13">{t('companyAccount.language.2')}</option>
                        <option value="14">{t('companyAccount.language.3')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.list.ads.wagePerHour')}:</label>
                      <input className="form-control" type="text" placeholder="42" inputMode="tel" required="" />
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.list.ads.lunch')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="yes">
                        <option value="yes">{t('mainPanel.list.search.yes')}</option>
                        <option value="no">{t('mainPanel.list.search.no')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.list.ads.living')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="12">
                        <option value="12">{t('mainPanel.candidate.controls.checkboxY')}</option>
                        <option value="13">{t('mainPanel.candidate.controls.checkboxN')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold">{t('mainPanel.list.ads.driver')}:</label>
                      <select className="form-select border-0 text-muted" defaultValue="12">
                        <option value="12">{t('mainPanel.candidate.controls.checkboxY')}</option>
                        <option value="13">{t('mainPanel.candidate.controls.checkboxN')}</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <label className="form-label fw-semibold" style={{color: '#faf9f9'}}>.</label>
                      <input className="form-control" type="text" placeholder={t('mainPanel.company.enterCityName')} inputMode="tel" required="" />
                    </div>



                    <div className="col-12">
                      <label className="form-label fw-semibold">{t('mainPanel.company.city')}:</label>
                      <div className="d-flex">
                        {[t('cities.2'), t('cities.4'), t('cities.5'), t('cities.6')].map(city => (
                          <span
                            key={city}
                            className={`btn text-nowrap rounded-pill m-2 ${selectedCity.includes(city) ? 'btn-primary text-white' : 'btn-grey'}`}
                            onClick={() => handleToggleCity(city)}
                            style={{ cursor: 'pointer' }}
                          >
                            {city}
                            {selectedCity.includes(city) && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x-lg ms-2">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
                              </svg>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>







                    <div className="col-12 mb-4 mt-5">
                      <label className="form-label fw-semibold">{t('personalAccount.tellUs')}</label>
                      <textarea className="form-control" rows="4" placeholder={t('personalAccount.optional')}></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Кнопка для открытия скрытого блока */}
              <div className="col-12 mb-4 mt-2">
                <div className="text-nowrap">
                  <a id="toggleLink" href="#" onClick={toggleVisibility}><strong>{t('companyAccount.addAnons')} </strong>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" className="fs-2 text-primary" id="toggleIcon">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="col-12 mb-4 mt-2">
                <button className="btn btn-primary btn-lg" type="submit">{t('mainPanel.company.controls.btnSave')}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEmployer;
