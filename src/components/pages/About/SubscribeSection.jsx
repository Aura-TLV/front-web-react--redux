import { useTranslation } from "react-i18next";
import companyImg5 from '../../../assets/img/bg-gradient-blue-orange.png';
import companyImg6 from '../../../assets/img/icon-facebook.png';
import companyImg7 from '../../../assets/img/icon-telegram.png';
import companyImg8 from '../../../assets/img/icon-whatsapp.png';

// Импорт стилей
import '../../../assets/styles/main.css';

const SubscribeSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container rounded-2 py-3 my-3" style={{ background: `url(${companyImg5}) center / cover no-repeat` }}>
        <div className="row d-flex flex-column justify-content-between flex-lg-row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="d-flex d-md-inline-flex flex-column align-items-center flex-md-row px-3 py-2 d-md-none">
              <div className="text-center text-md-start bg-white border rounded-pill mb-2 p-2">
                <p className="text-uppercase fw-semibold mb-0" style={{ fontSize: '12px', lineHeight: '16px' }}>{t('subscribe.subscribeText')}</p>
              </div>
              <div className="d-inline-flex mb-2">
                <div className="bg-white mx-2" style={{ borderRadius: '6px' }}>
                  <a href="https://wa.me/1234567890">
                    <img src={companyImg6} alt="Facebook" />
                  </a>
                </div>
                <div className="bg-white mx-2" style={{ borderRadius: '6px' }}>
                  <a href="https://wa.me/1234567890">
                    <img src={companyImg7} alt="Telegram" />
                  </a>
                </div>
                <div className="bg-white mx-2" style={{ borderRadius: '6px' }}>
                  <a href="https://wa.me/1234567890">
                    <img src={companyImg8} alt="WhatsApp" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-pill d-flex d-md-inline-flex flex-column align-items-center flex-md-row px-3 py-2 d-none d-md-block">
              <div className="text-center text-md-start">
                <p className="text-uppercase fw-semibold mb-0" style={{ fontSize: '14px' }}>Подпишись на один из наших каналов и будь в курсе вакансий и новостей</p>
              </div>
              <div className="d-inline-flex">
                <div className="px-2">
                  <a href="https://wa.me/1234567890">
                    <img src={companyImg6} alt="Facebook" />
                  </a>
                </div>
                <div className="px-2">
                  <a href="https://wa.me/1234567890">
                    <img src={companyImg7} alt="Telegram" />
                  </a>
                </div>
                <div className="px-2">
                  <a href="https://wa.me/1234567890">
                    <img src={companyImg8} alt="WhatsApp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-inline-flex justify-content-between"></div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;

