//import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
// Импорт js
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';

const FilterSectionAdmin = () => {
  const { t } = useTranslation();
  

  

  return (

    <div className="col-lg-3 pt-3 bg-grey" style={{position: 'relative'}}>
          <span className="toggle-link d-md-none" data-bs-toggle="collapse" href="#collapseForm" aria-expanded="true" aria-controls="collapseForm">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-up-short fs-4">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"></path>
            </svg>
          </span>
            <div className="border rounded border-0 collapse show" id="collapseForm">
                <form className="p-3">
                  <input className="border rounded-pill border-1 form-control" type="search" placeholder={t('filterAdmin.search')} />
                  <label className="form-label fs-6 fw-bold pt-3">{t('filterAdmin.cities')}:</label>
                  <input className="form-control border rounded-pill" type="text" placeholder={t('filterAdmin.haifa')} />
                  <label className="form-label fs-6 fw-bold pt-3">{t('filterAdmin.vacancy')}:</label>
                  <select className="border rounded-pill form-select text-muted">
                    <optgroup>
                        <option value="12">{t('professions.07')}</option>
                        <option value="13">{t('professions.08')}</option>
                        <option value="14">{t('professions.09')}</option>
                        <option value="15">{t('professions.10')}</option>
                    </optgroup>
                    </select>
                    <label className="form-label fs-6 fw-bold pt-3">{t('filterAdmin.documents')}:</label>
                    <select className="border rounded-pill form-select text-muted">
                      <optgroup>
                          <option value="teudat-zeut">{t('mainPanel.candidate.status.t1')} </option>
                          <option value="work-visa">{t('mainPanel.candidate.status.t2')}</option>
                          <option value="tour-visa">{t('mainPanel.candidate.status.t3')}</option>
                          <option value="blue-paper">{t('mainPanel.candidate.status.t4')}</option>
                      </optgroup>
                    </select>
                    <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.candidate.workingHours')}:</label>
                    <input className="form-control border rounded-pill" type="text" placeholder="8, 10" />
                    <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.candidate.wagePerHour')}:</label>
                      <div className="d-flex justify-content-between">
                        <input className="form-control border rounded-pill me-2" type="text" placeholder="33" />
                        <input className="form-control border rounded-pill me-2" type="text" placeholder="60" />
                      </div>
                    <div className="d-flex justify-content-between">
                        <div className="flex-fill me-2">
                          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.candidate.driver')}:</label>
                          <select className="border rounded-pill form-select text-muted">
                                <optgroup>
                                    <option value="12" selected="">{t('mainPanel.company.controls.checkboxN')}</option>
                                    <option value="14">{t('mainPanel.company.controls.checkboxY')}</option>
                                </optgroup>
                            </select></div>
                        <div className="flex-fill me-2">
                          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.candidate.lunch')}:</label>
                          <select className="border rounded-pill form-select text-muted">
                                <optgroup>
                                    <option value="14" selected="">{t('mainPanel.company.controls.checkboxY')}</option>
                                    <option value="12">{t('mainPanel.company.controls.checkboxN')}</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="flex-fill me-2" style={{maxWidth: '50%'}}>
                          <label className="form-label fs-6 fw-semibold pt-3">{t('mainPanel.candidate.living')}:</label>
                          <select className="border rounded-pill form-select text-muted">
                                <optgroup>
                                    <option value="12" selected="">{t('mainPanel.company.controls.checkboxN')}</option>
                                    <option value="14">{t('mainPanel.company.controls.checkboxY')}</option>
                                </optgroup>
                            </select>
                          </div>
                    </div>
                    <button className="btn btn-primary btn-lg my-3" type="button">{t('filterAdmin.btnSearch')} 
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search mx-2">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                        </svg>
                    </button>
                </form>
            </div>
     </div>
    
  );
}

export default FilterSectionAdmin;
