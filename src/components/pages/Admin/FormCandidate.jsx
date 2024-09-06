//import React from "react";
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
// Импорт js
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';
// import imsges
import iconEdit from '../../../assets/img/icon-edit.svg';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const EXAMPLE_CV_LINK = `${BACKEND_URL}/users/cv-example`;

const FormCandidate = ({ setDetailsShown }) => {
  const [selectedDriver, setSelectedDriver] = useState([]);
  const [selectedLunch, setSelectedLunch] = useState([]);
  const [selectedLiving, setSelectedLiving] = useState([]);

  const { t, i18n } = useTranslation();

  const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

  const toggleDriver = (driver) => {
    if (selectedDriver.includes(driver)) {
        setSelectedDriver(selectedDriver.filter(item => item !== driver));
    } else {
        setSelectedDriver([...selectedDriver, driver]);
    }
};

const toggleLunch = (lunch) => {
  if (selectedLunch.includes(lunch)) {
      setSelectedLunch(selectedLunch.filter(item => item !== lunch));
  } else {
      setSelectedLunch([...selectedLunch, lunch]);
  }
};

const toggleLiving = (living) => {
  if (selectedLiving.includes(living)) {
      setSelectedLiving(selectedLiving.filter(item => item !== living));
  } else {
      setSelectedLiving([...selectedLiving, living]);
  }
};

  // Проверка текущего языка для определения направления позиционирования иконки
  const isRtl = ['he', 'ar'].includes(i18n.language.split('-')[0]); // иврит и арабский


  // Функция для возврата к таблице
  const handleBackToTable = () => {
    setDetailsShown(false);
  };

  

  return (

    <div className="col-12">
                    <div>
                        <div className="col mb-5">
                            <div className="form-decoration">
                            <button onClick={handleBackToTable} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer',
  padding: '10px'
}}>
  {t('mainPanel.returnToTable')}
</button>
                                <form>
                                    <div className="row d-flex flex-column flex-lg-row">
                                        <div className="col-lg-4 d-flex flex-column mb-4">
                                          <label className="form-label fw-bold">{t('mainPanel.candidate.login')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="Soiskatel2024" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex flex-column mb-4">
                                          <label className="form-label fw-bold">{t('mainPanel.candidate.eMail')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="soiskatel@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex flex-column mb-4">
                                          <label className="form-label fw-bold">{t('mainPanel.candidate.password')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="*******24" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.name')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="Алиса Энштейн" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.birthDate')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="25.05.2024" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.city')}</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder={t('cities.2')} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.phone')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="0532262626" inputMode="tel" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.vacancy')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder={t('professions.07')} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.status.label')}:</label>
                                        <select className="border rounded-pill form-select text-muted" defaultValue="teudat-zeut">
                                                <optgroup>
                                                    <option value="teudat-zeut">{t('mainPanel.candidate.status.t1')}</option>
                                                    <option value="work-visa">{t('mainPanel.candidate.status.t2')}</option>
                                                    <option value="tour-visa">{t('mainPanel.candidate.status.t3')}</option>
                                                    <option value="blue-paper">{t('mainPanel.candidate.status.t4')}</option>
                                                </optgroup>
                                            </select></div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.workingHours')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="5" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.wagePerHour')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder="60+"  />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4"><label className="form-label fw-bold">{t('mainPanel.candidate.lang')}:</label>
                                            <div className="d-flex align-items-center position-relative">
                                              <img className="img-fluid position-absolute" src={iconEdit} style={isRtl ? {left: '10px'} : {right: '10px'}} />
                                              <input className="form-control border rounded-pill" type="text" placeholder={t('companyAccount.language.1')}  />
                                            </div>
                                        </div>
                                        <div className="col-12 mb-4 mt-5"><label className="form-label fw-bold">{t('mainPanel.candidate.aboutMe')}:</label>
                                        <img className="img-fluid mx-2" src={iconEdit} /> 
                                        <textarea className="form-control border" rows="4" placeholder={t('personalAccount.optional')}></textarea></div>
                                        
                                        <div htmlFor="cv" className="col-lg-4 mb-4">
            <label className="form-label fw-bold">{t('mainPanel.candidate.cv')}:</label>
            <div className="position-relative">
                <input
                    className="border rounded-pill form-control fw-bold mb-3 py-2"
                    type="text"
                    placeholder={t('mainPanel.candidate.cvPlaceholder')}
                    value={fileName}
                    readOnly
                    required
                    autoComplete="on"
                    inputMode=""
                />
                <input
                    type="file"
                    className="form-control-file position-absolute"
                    style={{top: '0', right: '0', bottom: '0', left: '0', opacity: '0', zIndex: '5'}}
                    onChange={handleFileChange}
                />
                <i className="far fa-file position-absolute" style={{top: '50%', right: '20px', transform: 'translateY(-50%)', width: '30px', height: '20px', zIndex: '10'}}></i>
            </div>
        </div>


                                        <div className="col-lg-8 mb-4">
                                            <div className="d-flex flex-column justify-content-start flex-md-row justify-content-md-between">
                                                

                                                <div>
                                        <label className="form-label fw-bold">{t('mainPanel.candidate.driver')}:</label>
                                        <div className="d-flex my-1">
                                        {[t('mainPanel.candidate.controls.checkboxY'), t('mainPanel.candidate.controls.checkboxN')].map(driver => (
                                            <span 
                                                key={driver} 
                                                className={`badge d-flex justify-content-center align-items-center me-1 rounded-pill fw-bold ${selectedDriver.includes(driver) ? 'bg-primary text-white' : 'bg-light text-black text-opacity-25'}`}
                                                onClick={() => toggleDriver(driver)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {driver}
                                            </span>
                                        ))}
                                        </div>
                                        {/* Скрытые чекбоксы для передачи данных формы */}
                                    {selectedDriver.map(driver => (
                                        <input key={driver} type="checkbox" name="driver" value={driver} checked readOnly hidden />
                                    ))}
                                    </div>



                                    <div >
                                      <label className="form-label fw-bold">{t('mainPanel.candidate.lunch')}:</label>
                                    <div className="d-flex my-1">
                                        {[t('mainPanel.candidate.controls.checkboxY'), t('mainPanel.candidate.controls.checkboxN')].map(lunch => (
                                            <span 
                                                key={lunch} 
                                                className={`badge d-flex justify-content-center align-items-center me-1 rounded-pill fw-bold ${selectedLunch.includes(lunch) ? 'bg-primary text-white' : 'bg-light text-black text-opacity-25'}`}
                                                onClick={() => toggleLunch(lunch)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {lunch}
                                            </span>
                                        ))}
                                        </div>
                                        {/* Скрытые чекбоксы для передачи данных формы */}
                                    {selectedLunch.map(lunch => (
                                        <input key={lunch} type="checkbox" name="lunch" value={lunch} checked readOnly hidden />
                                    ))}
                                    </div>

                                    <div>
                                      <label className="form-label fw-bold">{t('mainPanel.candidate.living')}:</label>
                                        <div className="d-flex my-1">
                                        {[t('mainPanel.candidate.controls.checkboxY'), t('mainPanel.candidate.controls.checkboxN')].map(living => (
                                            <span 
                                                key={living} 
                                                className={`badge d-flex justify-content-center align-items-center me-1 rounded-pill fw-bold ${selectedLiving.includes(living) ? 'bg-primary text-white' : 'bg-light text-black text-opacity-25'}`}
                                                onClick={() => toggleLiving(living)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {living}
                                            </span>
                                        ))}
                                        </div>
                                        {/* Скрытые чекбоксы для передачи данных формы */}
                                    {selectedLiving.map(living => (
                                        <input key={living} type="checkbox" name="living" value={living} checked readOnly hidden />
                                    ))}
                                    </div>


                                            </div>
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
}

export default FormCandidate;
