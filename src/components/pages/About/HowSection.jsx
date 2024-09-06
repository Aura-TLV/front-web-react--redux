import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
// Импорт изображений
import companyImg4 from '../../../assets/img/bg-gradient-blue.png';

// Импорт стилей
import '../../../assets/styles/main.css';


const HowSection = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#target-section') {
          const element = document.getElementById('target-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

  return (
    <section id="target-section">
        <div className="container p-4 rounded-2" style={{ background: `url(${companyImg4}) center / cover no-repeat, #2D92BE` }}>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-white mb-3">{t('about.howitWorksH1')}</h1>
                </div>
                <div className="col d-flex flex-column flex-lg-column flex-xxl-row container">
                    <div className="d-flex flex-column flex-lg-row custom-flex-container">
                        <div className="mx-2">
                            <h4 className="text-white">1. {t('about.howitWorks.one')}</h4>
                            <p className="text-white">{t('about.howitWorks.oneText')}</p>
                        </div>
                        <div className="mx-2">
                            <h4 className="text-white">2. {t('about.howitWorks.two')}</h4>
                            <p className="text-white">{t('about.howitWorks.twoText')}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row custom-flex-container">
                        <div className="mx-2">
                            <h4 className="text-white">3. {t('about.howitWorks.three')}</h4>
                            <p className="text-white">{t('about.howitWorks.threeText')}</p>
                        </div>
                        <div className="mx-2">
                            <h4 className="text-white">4. {t('about.howitWorks.four')}</h4>
                            <p className="text-white">{t('about.howitWorks.fourText')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HowSection;
