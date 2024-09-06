//import React from "react";
//import { useTranslation } from "react-i18next";
import resumeImg from '../../../assets/img/bck2.png';
import '../../../assets/styles/main.css';
import '../../../assets/js/collapse-script.js';

const FormSearchResumeSection = () => {
  //const { t } = useTranslation();

  return (
    <section style={{ width: '100%', background: `url(${resumeImg}) center / cover no-repeat`}}>
      <div className="container-fluid py-5" >
        <div className="row">
          <div className="col-12 col-md-10 text-center mx-auto">
            <h1 className="text-white">Не нашли подходящего работника?</h1>
            <h4 className="fs-5 fw-normal text-white">Оставьте контактные данные и укажите интересующее Вас направление и наш менеджер свяжется с Вами!</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div>
              <form>
                <div className="d-flex flex-column justify-content-center align-items-center flex-md-row align-items-md-start">
                  <div className="p-3" style={{ maxWidth: '320px' }}>
                    <div className="text-center text-md-start mb-3">
                      <label className="form-label fs-5 text-white">Название компании</label>
                      <input className="border rounded-pill form-control" type="text" placeholder="Напр: ТО СУПЕР" style={{ maxWidth: '320px' }} autoComplete="on" />
                    </div>
                    <div className="text-center text-md-start mb-3">
                      <label className="form-label fs-5 text-white">Чем занимается компания?</label>
                      <input className="border rounded-pill form-control" type="text" placeholder="Напр: Израиль, Хайфа" style={{ maxWidth: '320px' }} autoComplete="on" />
                    </div>
                    <div className="text-center text-md-start mb-3">
                      <label className="form-label fs-5 text-white">Телефон для связи</label>
                      <input className="border rounded-pill form-control" type="text" placeholder="Напр: 0532262626" style={{ maxWidth: '320px' }} inputMode="tel" required autoComplete="on" />
                    </div>
                  </div>
                  <div className="p-3" style={{ maxWidth: '320px' }}>
                    <div className="text-center text-md-start mb-3">
                      <label className="form-label fs-5 text-white">Ваше имя:</label>
                      <input className="border rounded-pill form-control" type="text" placeholder="Напр: Алиса Энштейн" style={{ maxWidth: '320px' }} />
                    </div>
                    <div className="text-center text-md-start mb-3">
                      <label className="form-label fs-5 text-white">Электронная почта для связи</label>
                      <input className="border rounded-pill form-control" type="text" placeholder="Напр: too_super@gmail.com" style={{ maxWidth: '320px' }} />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex flex-column justify-content-center align-items-center flex-md-row align-items-md-start">
                    <div className="text-start m-3" style={{ maxWidth: '320px' }}>
                      <button className="btn btn-primary border rounded-pill" type="button" style={{ background: 'linear-gradient(-93deg, #FE4300 0%, #FB9503)' }}>Отправить заявку</button>
                    </div>
                    <div className="text-start m-3" style={{ maxWidth: '320px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-info-circle fs-4 text-white me-2">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                      </svg>
                      <span style={{ fontSize: '14px' }}>
                        <span style={{ color: 'rgb(255, 255, 255)' }}>На Вашу электронную почту придет письмо с подтверждением и временным паролем для входа в ваш личный кабинет.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSearchResumeSection;

