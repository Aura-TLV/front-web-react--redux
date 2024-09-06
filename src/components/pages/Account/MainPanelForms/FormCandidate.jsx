import { useState } from 'react';
import { useTranslation } from "react-i18next";
import './FormCandidate.css';

import '../../../../assets/styles/main.css';
// Импорт js
import '../../../../assets/js/input-tel-clear.js';
import '../../../../assets/js/input-clear.js';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const EXAMPLE_CV_LINK = `${BACKEND_URL}/users/cv-example`;

const FormCandidate = () => {
    const [selectedWages, setSelectedWages] = useState([]);
    const [selectedWorkingHours, setSelectedWorkingHours] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState([]);
    const [selectedLunch, setSelectedLunch] = useState([]);
    const [selectedLiving, setSelectedLiving] = useState([]);
    const { t } = useTranslation();

    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const passwordLinkHandler = (e, msg) => {
        e.preventDefault();
        alert(msg);
    }

    const submitHandler = (e, msg) => {
        e.preventDefault();
        alert(msg);
    }

    const toggleBadge = (wage) => {
        if (selectedWages.includes(wage)) {
            setSelectedWages(selectedWages.filter(item => item !== wage));
        } else {
            setSelectedWages([...selectedWages, wage]);
        }
    };
    const toggleWorkingHour = (hour) => {
        if (selectedWorkingHours.includes(hour)) {
            setSelectedWorkingHours(selectedWorkingHours.filter(item => item !== hour));
        } else {
            setSelectedWorkingHours([...selectedWorkingHours, hour]);
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

    return (
            <div>
                <div className="col mb-5">
                    <div className="form-decoration">
                        <form onSubmit={(e) => submitHandler(e, t('mainPanel.candidate.formSubmitMsg'))}>
                            <div className="row d-flex flex-column flex-lg-row">
                                <div className="col-lg-4 d-flex flex-column mb-4">
                                    <label htmlFor="login" className="form-label fw-bold">{t('mainPanel.candidate.login')}:</label>
                                    <span>Soiskatel24</span>
                                </div>
                                <div className="col-lg-4 d-flex flex-column mb-4">
                                    <label htmlFor="eMail" className="form-label fw-bold">{t('mainPanel.candidate.eMail')}:</label>
                                    <a href="mailto:Soiskatel24@gmail.com"><span style={{ color: 'rgb(30, 30, 30)' }}>Soiskatel24@gmail.com</span></a>
                                </div>
                                <div className="col-lg-4 d-flex flex-column mb-4">
                                    <label htmlFor="password" className="form-label fw-bold">{t('mainPanel.candidate.password')}:</label>
                                    <span className="fw-semibold d-lg-none d-xl-block">
                                    <a id="password" href="#" 
                                        onClick={(e) => passwordLinkHandler(e, t('mainPanel.candidate.passwordResetSent'))} className="form-link">
                                        {t('mainPanel.candidate.passwordLink')}
                                    </a>
                                    </span>
                                    <span className="fw-semibold d-none d-lg-block d-xl-none">
                                    <a id="password" href="#" 
                                        onClick={(e) => passwordLinkHandler(e, t('mainPanel.candidate.passwordResetSent'))} className="form-link">
                                        {t('mainPanel.candidate.passwordLink')}
                                    </a>
                                    </span>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <label htmlFor="userName" className="form-label fw-bold">{t('mainPanel.candidate.name')}:</label>
                                    <input className="form-control" id="userName" type="text" placeholder="Алиса Энштейн" />
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <label htmlFor="birthDate" className="form-label fw-bold">{t('mainPanel.candidate.birthDate')}:</label>
                                    <input className="form-control" id="birthDate" type="date" placeholder="25.05.24" />
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <label htmlFor="city" className="form-label fw-bold">{t('mainPanel.candidate.city')}:</label>
                                    <select className="form-select border-0 text-muted" id="city" defaultValue="option1">
                                        
                                            <option value="option1">{t('cities.1')}</option>
                                            <option value="option2">{t('cities.2')}</option>
                                            <option value="option3">{t('cities.3')}</option>
                                        
                                    </select>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <label htmlFor="phone" className="form-label fw-bold">{t('mainPanel.candidate.phone')}:</label>
                                    <input className="form-control" id="phone" type="tel" pattern="05\d{1}[-\s]*\d{3}[-\s]*\d{4}" inputMode="tel" required="" placeholder="0532262626" />
                                </div>
                                <div className="col-lg-6 col-xl-4 mb-4">
                                    <label htmlFor="job" className="form-label fw-bold">{t('mainPanel.candidate.vacancy')}</label>
                                    <select className="form-select border-0 text-muted" id="job" defaultValue="option1">
                                        
                                            <option value="option1">{t('professions.01')}</option>
                                            <option value="option2">{t('professions.02')}</option>
                                            <option value="option3">{t('professions.03')}</option>
                                            <option value="option3">{t('professions.04')}</option>
                                            <option value="option3">{t('professions.05')}</option>
                                            <option value="option3">{t('professions.06')}</option>
                                            <option value="option3">{t('professions.07')}</option>
                                            <option value="option3">{t('professions.08')}</option>
                                            <option value="option3">{t('professions.09')}</option>
                                            <option value="option3">{t('professions.10')}</option>
                                            <option value="option3">{t('professions.11')}</option>
                                            <option value="option3">{t('professions.12')}</option>
                                            <option value="option3">{t('professions.13')}</option>
                                        
                                    </select>
                                </div>
                                <div className="col-lg-6 col-xl-4 mb-4">
                                    <label htmlFor="status" className="form-label fw-bold">{t('mainPanel.candidate.status.label')}</label>
                                    <select className="form-select border-0 text-muted" id="status" defaultValue="teudat-zeut">
                                        
                                            <option value="teudat-zeut">{t('mainPanel.candidate.status.t1')}</option>
                                            <option value="work-visa">{t('mainPanel.candidate.status.t2')}</option>
                                            <option value="tour-visa">{t('mainPanel.candidate.status.t3')}</option>
                                            <option value="blue-paper">{t('mainPanel.candidate.status.t4')}</option>
                                        
                                    </select>
                                </div>
                                <div className="col-12 mb-4">
                                    <label className="form-label fw-bold">{t('mainPanel.candidate.additionalInfo')}:</label>
                                    <textarea id="additionalInfo" className="form-control" rows="4" placeholder={t('personalAccount.optional')}></textarea>
                                </div>
                                <div className="col-12 mb-4">
                                    <h5>{t('mainPanel.candidate.extraInfoLabel')}</h5>
                                </div>
                                <div className="col-12 d-flex flex-column flex-wrap flex-md-row mb-4">
                                <div className="mb-4 me-3">
                                    <label className="form-label fw-bold">{t('mainPanel.candidate.workingHours')}:</label>
                                    <div className="d-flex">
                                        {['8', '10', '12'].map(hour => (
                                            <span 
                                            key={hour} 
                                            className={`badge d-flex justify-content-center align-items-center me-1 rounded-circle fw-bold ${selectedWorkingHours.includes(hour) ? 'bg-primary text-white' : 'bg-light text-black text-opacity-25'}`}
                                            onClick={() => toggleWorkingHour(hour)}
                                            style={{ cursor: 'pointer' }}
                                            >
                                            {hour}
                                            </span>
                                        ))}
                                    </div>
    
                                    {/* Скрытые чекбоксы для отправки данных формы */}
                                    {selectedWorkingHours.map(hour => (
                                    <input key={hour} type="checkbox" name="workingHours" value={hour} checked readOnly hidden />
                                ))}
                                </div>

                                    <div className="mb-4 me-3">
                                    <label className="form-label fw-bold">{t('mainPanel.candidate.wagePerHour')}:</label>
                                    <div className="d-flex">
                                        {['33+', '40', '50'].map(wage => (
                                            <span 
                                                key={wage} 
                                                className={`badge d-flex justify-content-center align-items-center me-1 rounded-circle fw-bold ${selectedWages.includes(wage) ? 'bg-primary text-white' : 'bg-light text-black text-opacity-25'}`}
                                                onClick={() => toggleBadge(wage)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {wage}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Скрытые чекбоксы для передачи данных формы */}
                                    {selectedWages.map(wage => (
                                        <input key={wage} type="checkbox" name="wages" value={wage} checked readOnly hidden />
                                    ))}
                                </div>

                                    <div className="mb-4 me-3">
                                        <label className="form-label fw-bold">{t('mainPanel.candidate.driver')}:</label>
                                        <div className="d-flex">
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

                                    <div className="mb-4 me-3"><label className="form-label fw-bold">{t('mainPanel.candidate.lunch')}:</label>
                                    <div className="d-flex">
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

                                    <div className="mb-4 me-3"><label className="form-label fw-bold">{t('mainPanel.candidate.living')}:</label>
                                        <div className="d-flex">
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
                                <div className="col-lg-4 mb-4">
                                    <label className="form-label fw-bold">{t('mainPanel.company.contractType.label')}:</label>
                                    <select className="form-select border-0 text-muted" name="contractType" defaultValue="option1">
                                        
                                            <option name="asaka" value="option1">{t('mainPanel.company.contractType.asaka')}</option>
                                            <option name="asama" value="option2">{t('mainPanel.company.contractType.asama')}</option>
                                            
                                        
                                    </select>
                                </div>

                                <div htmlFor="cv" className="col-lg-4 mb-4">
            <label className="form-label fw-bold">{t('mainPanel.candidate.cv')}:</label>
            <div className="position-relative">
                <input
                    className="border rounded form-control fw-bold mb-3 py-2 border-0"
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



                                <div className="col-lg-12 col-xl-4 d-flex flex-column mb-4">
                                    <label className="form-label fw-bold d-none d-lg-block" style={{color: '#faf9f9'}}>.</label>
                                    
                                    <a className="form-link" href={EXAMPLE_CV_LINK} target="_blank">{t('mainPanel.candidate.cvLink')}</a>
                                </div>
                                <div className="col-12 mb-4 mt-2">
                                    <button type="submit" className="btn btn-primary btn-lg fw-bold">{t('mainPanel.candidate.controls.btnSave')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default FormCandidate;