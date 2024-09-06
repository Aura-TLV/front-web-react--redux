//import React, { useEffect, useState } from "react";
//import { useTranslation } from "react-i18next";
import '../../../assets/styles/main.css';
// Импорт видео и постера
import companyVideo from '../../../assets/video/video-resume.mp4';
import companyVideoPoster from '../../../assets/img/company-video-img.png';
// Импорт js
//import '../../../assets/js/collapse-form-script.js';
//import '../../../assets/js/collapse-script.js';

const VideoGuideSection = () => {
  //const { t } = useTranslation();

  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-xl-row mb-5 bg-video">
                        <div className="text-center text-lg-start p-2">
                            <h4 className="text-body fw-bold mb-3">Есть сложности в навигации по отделу?</h4>
                            <h4 className="mb-3 fw-bold">Посмотрите& видео-гайд!</h4>
                        </div>
                        <div className="p-3">
                        <video 
                            autoPlay 
                            muted 
                            controls 
                            style={{ borderRadius: '30px' }} 
                            poster={companyVideoPoster} 
                            height="315" 
                            width="560"
                        >
                            <source src={companyVideo} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
  

        
  );
}

export default VideoGuideSection;
