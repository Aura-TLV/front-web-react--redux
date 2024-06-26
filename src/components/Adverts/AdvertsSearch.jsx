
import { useTranslation } from 'react-i18next';

const AdvertsSearch = () => {

  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="city">
            <h4>{t('mainPanel.list.search.city')}</h4>
          </label>
          <input id="city" />
        </div>
        <div className="col-md-12">
          <label htmlFor="workingHours">
            <h4>{t('mainPanel.list.search.workingHours')}</h4>
          </label>
          <input id="workingHours" type="time" defaultValue="00:00" />
        </div>
        <div className="col-md-12">
          <label htmlFor="wagePerHours">
            <h4>{t('mainPanel.list.search.wagePerHour')}</h4>
          </label>
          <input type="number" min={33} defaultValue={33} />
        </div>
        <div className="col-md-12">
          <label htmlFor="driver">
            <h4>{t('mainPanel.list.search.driver')}</h4>
          </label>
          <input type="radio" name="driver" /> {t('mainPanel.list.search.yes')}
          <input type="radio" name="driver" /> {t('mainPanel.list.search.no')}
        </div>
        <div className="col-md-12">
          <label htmlFor="lunch">
            <h4>{t('mainPanel.list.search.lunch')}</h4>
          </label>
          <input type="radio" name="lunch" /> {t('mainPanel.list.search.yes')}
          <input type="radio" name="lunch" /> {t('mainPanel.list.search.no')}
        </div>
        <div className="col-md-12">
          <label htmlFor="living">
            <h4>{t('mainPanel.list.search.living')}</h4>
          </label>
          <input type="radio" name="living" /> {t('mainPanel.list.search.yes')}
          <input type="radio" name="living" /> {t('mainPanel.list.search.no')}
        </div>
        <div className="col-md-12">
          <button type="submit">
            {t('mainPanel.list.search.btnSearch')}
          </button>
        </div>
      </div>
    </form>

  )
}

export default AdvertsSearch;