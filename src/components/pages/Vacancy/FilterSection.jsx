//import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
import '../../../assets/styles/main.css';
// Импорт js
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';

const FilterSection = () => {
  const { t } = useTranslation();

  

  return (
    <div className="col-md-3 mb-5 d-md-mb-0" style={{ position: 'relative' }}>
      <span className="toggle-link d-md-none" data-bs-toggle="collapse" href="#collapseForm" aria-expanded="true" aria-controls="collapseForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-up-short fs-4">
          <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"></path>
        </svg>
      </span>
      <div className="border rounded border-0 bg-grey collapse show" id="collapseForm">
      <form className="p-3">
        
          <label className="form-label fs-6 fw-semibold">{t('mainPanel.list.search.btnSearch')}</label>
          <input className="border rounded-pill border-1 form-control" type="search" />

          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.list.search.city')}</label>
          <div className="d-flex flex-row flex-md-column">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck" defaultChecked />
              <label className="form-check-label" htmlFor="formCheck-1">{t('cities.1')}</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-1" />
              <label className="form-check-label" htmlFor="formCheck-1">{t('cities.2')}</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-2" />
              <label className="form-check-label" htmlFor="formCheck-2">{t('cities.4')}</label>
            </div>
          </div>
          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.list.search.workingHours')}</label>
          <div className="d-flex flex-md-column">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-3" defaultChecked />
              <label className="form-check-label" htmlFor="formCheck-3">8</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-4" />
              <label className="form-check-label" htmlFor="formCheck-4">10</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-9" />
              <label className="form-check-label" htmlFor="formCheck-9">12</label>
            </div>
          </div>
          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.list.search.wagePerHour')}</label>
          <div className="d-flex flex-md-column">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-5" />
              <label className="form-check-label" htmlFor="formCheck-5">33+</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-7" defaultChecked />
              <label className="form-check-label" htmlFor="formCheck-7">40+</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-8" />
              <label className="form-check-label" htmlFor="formCheck-8">50+</label>
            </div>
          </div>
          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.list.search.driver')}</label>
          <div className="d-flex flex-md-column">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-6" />
              <label className="form-check-label" htmlFor="formCheck-6">{t('mainPanel.list.search.yes')}</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-11" defaultChecked />
              <label className="form-check-label" htmlFor="formCheck-11">{t('mainPanel.list.search.no')}</label>
            </div>
          </div>
          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.list.search.lunch')}</label>
          <div className="d-flex flex-md-column">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-10" />
              <label className="form-check-label" htmlFor="formCheck-10">{t('mainPanel.list.search.yes')}</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-13" defaultChecked />
              <label className="form-check-label" htmlFor="formCheck-13">{t('mainPanel.list.search.no')}</label>
            </div>
          </div>
          <label className="form-label fs-6 fw-bold pt-3">{t('mainPanel.list.search.living')}</label>
          <div className="d-flex flex-md-column">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-12" />
              <label className="form-check-label" htmlFor="formCheck-12">{t('mainPanel.list.search.yes')}</label>
            </div>
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" id="formCheck-14" defaultChecked />
              <label className="form-check-label" htmlFor="formCheck-14">{t('mainPanel.list.search.no')}</label>
            </div>
          </div>
          <button className="btn btn-primary my-3" type="button">{t('mainPanel.list.search.btnSearch')}</button>
        </form>
      </div>
    </div>
  );
}

export default FilterSection;
