import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
// Импорт js
//import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';

const FilterListSection = () => {
  const { t } = useTranslation();

  

  return (
  <div className="col mb-5">
      <div className="d-flex flex-column">
        <div className="me-3" style={{width: '8px', height: 'auto', borderRadius: '6px', borderLeft: '4px solid #3B77B4'}}></div>
        <div className="d-flex justify-content-between">
            <h4>#123457 - Водитель категории С1</h4>
        </div>
        <div className="d-flex flex-column justify-content-between flex-md-row">
            <div className="my-2"><span className="fw-bold me-1">Локация:</span><span>Хайфа</span></div>
            <div className="my-2"><span className="fw-bold me-1">Возраст:</span><span>25</span></div>
            <div className="my-2"><span className="fw-bold me-1">Опыт:</span><span>да</span></div>
            <div className="my-2"><span className="fw-bold me-1">Язык:</span><span>Иврит, Русский</span></div>
            <div className="my-2"><span className="fw-bold me-1">Документы:</span><span>Гражданство</span></div>
        </div>
        <div>
            <div id="collapseText" className="collapse">
            <div className="d-flex flex-column justify-content-between flex-md-row">
                    <div className="my-2"><span className="fw-bold me-1">Часы работы:</span><span>8</span></div>
                    <div className="my-2"><span className="fw-bold me-1">Зарплата:</span><span>33+ час</span></div>
                    <div className="my-2"><span className="fw-bold me-1">Подвозка:</span><span>Не важно</span></div>
                    <div className="my-2"><span className="fw-bold me-1">Питание:</span><span>Не важно</span></div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="my-2"><span className="fw-bold me-1">Проживание:</span><span>Не важно</span></div>
                </div>
                
                <div className="d-flex justify-content-between">
                    <div className="my-2"><span className="fw-bold me-1">{t('mainPanel.list.ads.additionalInfo')}:</span><span>Опыт работы имеется, оуществлял пассажирские перевозки (наличные и безналичные клиенты) в соответствии с законодательством и Стандартом предоставления такси-услуг; - контролировал техническое состояние автомобиля, чистоту и порядок в салоне.</span></div>
                </div>
                <div className="my-2"><button className="btn btn-primary border rounded-pill" type="button">Фото</button></div>
            </div>
            <div className="my-2"><a className="fw-bold toggle-button" href="#collapseText" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseText">Скрыть<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-up-short fs-5">
                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"></path>
                    </svg></a></div>
            <div className="my-2"><button className="btn btn-secondary border rounded-pill" type="button">Откликнуться на вакансию</button></div>
        </div>
      </div>
  </div>




        
  );
}

export default FilterListSection;
