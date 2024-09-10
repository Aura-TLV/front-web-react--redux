//import React from 'react';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCity } from '../../../redux/slices/candidateSlice'; // Redux action for cities
import '../../../assets/styles/main.css';
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';
import iconEdit from '../../../assets/img/icon-edit.svg';

const FormHR = ({ setDetailsShown }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.candidate.selectedCity); // Redux city state

  const isRtl = ['he', 'ar'].includes(i18n.language.split('-')[0]); // Right-to-left check

  const handleBackToTable = () => {
    setDetailsShown(false);
  };

  const handleCityToggle = (city) => {
    dispatch(toggleCity(city));
  };

  return (
    <div className="col-12">
      <div>
        <div className="col mb-5">
          <div className="form-decoration">
            <button
              onClick={handleBackToTable}
              style={{
                background: 'none',
                color: 'blue',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              {t('mainPanel.returnToTable')}
            </button>

            <form>
              <div className="row d-flex flex-column flex-lg-row">
                <div className="col-lg-4 d-flex flex-column mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.login')}:</label>
                  <div className="d-flex align-items-center position-relative">
                    <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? { left: '10px' } : { right: '10px' }} />
                    <input className="form-control border rounded-pill" type="text" placeholder="rabota2024" />
                  </div>
                </div>
                <div className="col-lg-4 d-flex flex-column mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.eMail')}:</label>
                  <div className="d-flex align-items-center position-relative">
                    <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? { left: '10px' } : { right: '10px' }} />
                    <input className="form-control border rounded-pill" type="text" placeholder="rabota2024@gmail.com" />
                  </div>
                </div>
                <div className="col-lg-4 d-flex flex-column mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.password')}:</label>
                  <div className="d-flex align-items-center position-relative">
                    <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? { left: '10px' } : { right: '10px' }} />
                    <input className="form-control border rounded-pill" type="text" placeholder="*******24" />
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.name')}:</label>
                  <div className="d-flex align-items-center position-relative">
                    <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? { left: '10px' } : { right: '10px' }} />
                    <input className="form-control border rounded-pill" type="text" placeholder="Коэн Яков Ааронович" />
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.companyName')}:</label>
                  <input className="form-control border rounded-pill" type="text" placeholder="ТОО 'СУПЕР'" />
                </div>
                <div className="col-lg-12 col-xl-4 mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.companyType')}?</label>
                  <select className="border rounded-pill form-select text-muted">
                    <optgroup>
                      <option value="12">{t('companyAccount.typeBusiness.01')}</option>
                      <option value="13">{t('companyAccount.typeBusiness.02')}</option>
                      <option value="14">{t('companyAccount.typeBusiness.03')}</option>
                    </optgroup>
                  </select>
                </div>

                <div className="col-12">
                                  <div className="row">
                                      <div className="col-lg-6 col-xl-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.company.phone')}:</label>
                                          <div className="d-flex align-items-center position-relative">
                                            <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}}/>
                                            <input className="form-control border rounded-pill" type="text" placeholder="0532262626" inputMode="tel" />
                                          </div>
                                      </div>
                                  </div>
                              </div>


                              <div className="row additional-fields">
                                      <div className="col-12 d-flex flex-column mb-5 mt-3">
                                          <div className="d-flex">
                                              <div className="dropdown">
                                                <button className="btn btn-primary btn-lg dropdown-toggle text-nowrap" aria-expanded="false" data-bs-toggle="dropdown" type="button">{t('companyAccount.yourAdds.01')}&nbsp;

                                                </button>
                                                  <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.02')}</a>
                                                    <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.03')}</a>
                                                    <a className="dropdown-item" href="#">{t('companyAccount.yourAdds.04')}</a>
                                                  </div>
                                              </div>
                                              <button className="btn btn-danger text-nowrap rounded-pill mx-3" type="button">{t('companyAccount.delAnons')}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x-lg mx-2">
                                                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
                                                </svg>
                                              </button>
                                          </div>
                                      </div>
                                      </div>

                



                <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.company.job')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup >
                                                  <option value="12" selected="">{t('professions.05')}</option>
                                                  <option value="13">{t('professions.06')}</option>
                                                  <option value="14">{t('professions.08')}</option>
                                              </optgroup>
                                          </select>
                                      </div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.company.city')}</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup label={t('cities.0')}>
                                                  <option value="12">{t('cities.2')}</option>
                                                  <option value="13">{t('cities.1')}</option>
                                                  <option value="14">{t('cities.4')}</option>
                                              </optgroup>
                                          </select>
                                      </div>



                <div className="col-lg-4 mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.age')}:</label>
                  <select className="form-select border rounded-pill text-muted">
                    <optgroup>
                      <option value="12">{t('companyAccount.age.1')}</option>
                      <option value="13">{t('companyAccount.age.2')}</option>
                      <option value="14">{t('companyAccount.age.3')}</option>
                    </optgroup>
                  </select>
                </div>



                <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.company.experience')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup>
                                                  <option value="12" selected="">{t('companyAccount.experience.1')}</option>
                                                  <option value="13">{t('companyAccount.experience.2')}</option>
                                                  <option value="14">{t('companyAccount.experience.3')}</option>
                                              </optgroup>
                                          </select>
                                      </div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.company.status.label')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup defaultValue="teudat-zeut">
                                                  <option value="teudat-zeut">{t('mainPanel.company.status.t1')}</option>
                                                  <option value="work-visa">{t('mainPanel.company.status.t2')}</option>
                                                  <option value="tour-visa">{t('mainPanel.company.status.t3')}</option>
                                                  <option value="blue-paper">{t('mainPanel.company.status.t4')}</option>
                                              </optgroup>
                                          </select>
                                      </div>


                                      

                <div className="col-lg-4 mb-4">
                  <label className="form-label fw-bold">{t('mainPanel.company.language')}:</label>
                  <select className="form-select border rounded-pill text-muted">
                    <optgroup>
                      <option value="12">{t('companyAccount.language.1')}</option>
                      <option value="13">{t('companyAccount.language.2')}</option>
                      <option value="14">{t('companyAccount.language.3')}</option>
                    </optgroup>
                  </select>
                </div>


                <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.company.language')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup>
                                                  <option value="12" selected="">{t('companyAccount.language.1')}</option>
                                                  <option value="13">{t('companyAccount.language.2')}</option>
                                                  <option value="14">{t('companyAccount.language.3')}</option>
                                              </optgroup>
                                          </select></div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.candidate.wagePerHour')}:</label>
                                        <input className="form-control border rounded-pill" type="text" placeholder="42" required="" />
                                      </div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.candidate.lunch')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup >
                                                  <option value="12" selected="">{t('mainPanel.candidate.controls.checkboxY')}</option>
                                                  <option value="13">{t('mainPanel.candidate.controls.checkboxN')}</option>
                                              </optgroup>
                                          </select></div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.candidate.living')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup>
                                                  <option value="12" selected="">{t('mainPanel.candidate.controls.checkboxY')}</option>
                                                  <option value="13">{t('mainPanel.candidate.controls.checkboxN')}</option>
                                              </optgroup>
                                          </select></div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold">{t('mainPanel.candidate.driver')}:</label>
                                        <select className="form-select border rounded-pill text-muted">
                                              <optgroup>
                                                  <option value="12">{t('mainPanel.candidate.controls.checkboxY')}</option>
                                                  <option value="13">{t('mainPanel.candidate.controls.checkboxN')}</option>
                                              </optgroup>
                                          </select></div>
                                      <div className="col-lg-4 mb-4">
                                        <label className="form-label fw-bold" style={{color: '#faf9f9'}}>.</label>
                                        <input className="form-control border rounded-pill" type="text" placeholder={t('mainPanel.company.enterCityName')} required="" />
                                      </div>



                {/* Поле для городов */}
                <div className="col-12">
                  <label className="form-label fw-bold">{t('mainPanel.company.city')}</label>
                  <div className="d-flex">
                    {[t('cities.2'), t('cities.4'), t('cities.5'), t('cities.6')].map(city => (
                      <span 
                        key={city} 
                        className={`btn text-nowrap rounded-pill m-2 ${selectedCity.includes(city) ? 'btn-primary text-white' : 'btn-grey'}`}
                        onClick={() => handleCityToggle(city)}
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

                  {/* Скрытые чекбоксы для передачи данных формы */}
                  {selectedCity.map(city => (
                    <input key={city} type="checkbox" name="city" value={city} checked readOnly hidden />
                  ))}
                </div>

                

                <div className="col-12 mb-4 mt-5">
                  <label className="form-label fw-semibold">{t('mainPanel.company.additionalInfo')}:</label>
                  <textarea className="form-control border" rows="4" placeholder={t('mainPanel.company.additionalInfoPlaceholder')}></textarea>
                </div>

                <div className="col-12 mb-4 mt-2">
                  <button className="btn btn-primary btn-lg me-3 my-3" type="button">{t('mainPanel.candidate.controls.btnSave')}</button>
                  <button className="btn btn-secondary text-nowrap rounded-pill btn-grey me-3 my-3" type="button">{t('mainPanel.candidate.close')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x-lg mx-2">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
                    </svg>
                  </button>
                  <button className="btn btn-danger text-nowrap rounded-pill me-3 my-3" type="button">{t('mainPanel.candidate.delete')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-trash3 mx-2">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHR;
