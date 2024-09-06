import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
// Импорт js
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';

const FilterListSection = () => {
  const { t } = useTranslation();

  

  return (
  <div className="col mb-5">
      <div className="d-flex flex-column">
        <div className="me-3" style={{width: '8px', height: 'auto', borderRadius: '6px', borderLeft: '4px solid #3B77B4'}}></div>
        <div className="d-flex justify-content-between">
            <h4>#123457 - {t('mainPanel.list.ads.jobTitle')} ({t('cities.2')})</h4>
        </div>
        <div className="d-flex flex-column justify-content-between flex-md-row">
            <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.wagePerHour')}:</span><span>40&nbsp;<span style={{color: 'rgb(0, 0, 0)',  backgroundColor: 'rgb(242, 245, 250)'}}>₪</span></span></div>
            <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.workingHours')}:</span><span>8-12</span></div>
            <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.driver')}:</span><span>{t('mainPanel.company.controls.checkboxY')} ({t('cities.1')},{t('cities.2')},{t('cities.3')})</span></div>
        </div>
        <div>
            <div id="collapseText" className="collapse">
                <div className="d-flex justify-content-between">
                    <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.shifts.label')}:</span><span>{t('mainPanel.list.ads.shifts.morning')} (07:00-16:00) {t('mainPanel.list.ads.shifts.night')} (16:00 - 24:00)</span></div>
                </div>
                <div className="d-flex flex-column justify-content-between flex-md-row">
                    <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.break')}:</span><span>1 {t('mainPanel.list.ads.hour')} </span></div>
                    <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.lunch')}:</span><span>{t('mainPanel.list.ads.no')}</span></div>
                    <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.living')}:</span><span>{t('mainPanel.list.ads.no')}</span></div>
                    <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.bonus')}:</span><span>{t('mainPanel.list.ads.yes')}</span></div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="my-2"><span className="fw-semibold me-1">{t('mainPanel.list.ads.additionalInfo')}:</span><span>{t('mainPanel.list.ads.jobDescription')}</span></div>
                </div>
                <div className="my-2"><button className="btn btn-primary border rounded-pill" type="button">{t('mainPanel.list.ads.images')}</button></div>
            </div>
            <div className="my-2">
                <a className="fw-semibold toggle-button" href="#collapseText" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseText">{t('mainPanel.list.ads.less')}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-up-short fs-5">
                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"></path>
                    </svg></a></div>
            <div className="my-2"><button className="btn btn-secondary border rounded-pill" type="button">{t('mainPanel.list.ads.btnReply')}</button></div>
        </div>
      </div>
  </div>




        
  );
}

export default FilterListSection;
