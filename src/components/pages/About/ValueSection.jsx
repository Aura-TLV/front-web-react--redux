import { useTranslation } from "react-i18next";
// Импорт стилей
import '../../../assets/styles/main.css';

const ValueSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3">{t('about.weOfferH1')}</h1>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #1F6586, #2D92BE)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#1F6586' }}>{t('about.weOffer.one')}:</h4>
                <p>{t('about.weOffer.oneText')}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #DB8113, #F6A308 100%)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#DB8113' }}>{t('about.weOffer.two')}:</h4>
                <div className="d-inline-flex flex-column flex-md-row">
                  <div>
                    <p>{t('about.weOffer.twoTextOne')}</p>
                  </div>
                  <div>
                    <p>{t('about.weOffer.twoTextTwo')}</p>
                  </div>
                  <div>
                    <p>{t('about.weOffer.twoTextThree')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #252D75, #3336BF)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#252D75' }}>{t('about.weOffer.three')}:</h4>
                <p>{t('about.weOffer.threeText')}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #D9480A, #F38317)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#D9480A' }}>{t('about.weOffer.four')}:</h4>
                <p>{t('about.weOffer.fourText')}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #A72436, #E03443)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#A72436' }}>{t('about.weOffer.five')}:</h4>
                <p>{t('about.weOffer.fiveText')}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #2D529C, #3B7DC8)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#2D529C' }}>{t('about.weOffer.six')}:</h4>
                <p>{t('about.weOffer.sixText')}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-1" style={{ background: 'linear-gradient(20deg, #8D4234, #C65E48)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between mx-2">
                <h4 style={{ color: '#8D4234' }}>{t('about.weOffer.seven')}:</h4>
                <p>{t('about.weOffer.sevenText')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
