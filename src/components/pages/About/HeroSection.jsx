import { useTranslation } from "react-i18next";
// Импорт изображений
import companyImg1 from '../../../assets/img/company-img-1.png';
import companyImg2 from '../../../assets/img/company-img-2.png';

// Импорт стилей
import '../../../assets/styles/main.css';


const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 text-center py-1" style={{ position: 'relative' }}>
            <a className="a-dark" href="#">
              <div className="bg-white py-3 px-4 rounded-pill" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <p className="fs-5 fw-semibold mb-0">{t('about.lookingJob')}</p>
              </div>
            </a>
            <img className="img-fluid" src={companyImg1} alt="Описание первого изображения" />
          </div>
          <div className="col-md-6 text-center py-1" style={{ position: 'relative' }}>
            <a className="a-dark" href="#">
              <div className="bg-white py-3 px-4 rounded-pill" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <p className="fs-5 fw-semibold mb-0">{t('about.lookingEmployee')}</p>
              </div>
            </a>
            <img className="img-fluid" src={companyImg2} alt="Описание второго изображения" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
