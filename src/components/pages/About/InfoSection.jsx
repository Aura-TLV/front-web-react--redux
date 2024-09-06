import { useTranslation } from "react-i18next";
// Импорт изображений
import companyImg3 from '../../../assets/img/worker.png';

// Импорт стилей
import '../../../assets/styles/main.css';


const InfoSection = () => {
  const { t } = useTranslation();
  return (
    <section>
        <div className="container py-4">
            <div className="row d-flex flex-column align-items-center flex-lg-row">
                <div className="col-lg-6">
                    <h1 className="mb-3">&nbsp;{t('about.aboutCompanyH1')}</h1>
                    <p>{t('about.aboutCompany')}</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src={companyImg3} alt="Описание изображения" />
                  </div>
            </div>
        </div>
    </section>
  );
}

export default InfoSection;
