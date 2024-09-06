//import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
// Import images
import triggerImg1 from '../../../assets/img/icons8-telegram-48.png';
import triggerImg2 from '../../../assets/img/icons8-whatsapp-messenger-cross-platform-mobile-devices-messaging-application-48.png';

// Импорт js
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';

const FilterSection = () => {
  const { t } = useTranslation();

  

  return (
    <div className="col mb-5 py-2 py-lg-0" style={{background: '#3B77B4', borderRadius: '30px', borderLeftWidth: '1px'}}>
        <div className="d-flex flex-column justify-content-between align-items-center align-self-center flex-lg-row">
            <div className="text-center text-lg-start d-flex flex-column justify-content-center px-3">
                <h5 className="text-uppercase text-white mb-0">{t('trigger')}</h5>
                <p className="text-uppercase text-white pb-0" style={{fontSize: '14px'}}>{t('triggerMes')}</p>
            </div>
            <div className="bg-white d-inline-flex px-5 py-3 shadow-inner" style={{borderTopRightRadius: '30px', borderBottomRightRadius: '30px', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', borderLeftColor: '#f9f9f9'}}>
                <div className="px-3"><img src={triggerImg1} alt="Подписка в telegram" /></div>
                <div className="px-3"><img src={triggerImg2} alt="Подписка в whatsapp" /></div>
            </div>
        </div>
    </div>
  );
}

export default FilterSection;
