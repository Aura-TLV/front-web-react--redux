
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { searchJobs } from '../../../utils/fetcher';

const AdvertsSearch = () => {

  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useState({
    city: '',
    workingHours: '00:00',
    wagePerHour: 33,
    driverToWork: false,
    lunch: false,
    living: false
  });

  const onChangeHandler = (name, value) => {
    setSearchParams({ ...searchParams, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await searchJobs(searchParams);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="city">
            <h4>{t('mainPanel.list.search.city')}</h4>
          </label>
          <input onMouseLeave={(e) => onChangeHandler('city', e.target.value)}
            onKeyDown={(e) => onChangeHandler('city', e.target.value)}
            onChange={(e) => onChangeHandler('city', e.target.value)} id="city" />
        </div>
        <div className="col-md-12">
          <label htmlFor="workingHours">
            <h4>{t('mainPanel.list.search.workingHours')}</h4>
          </label>
          <input onMouseLeave={(e) => onChangeHandler('workingHours', e.target.value)}
            onKeyDown={(e) => onChangeHandler('workingHours', e.target.value)}
            onChange={(e) => onChangeHandler('workingHours', e.target.value)} id="workingHours" type="time" defaultValue="00:00" />
        </div>
        <div className="col-md-12">
          <label htmlFor="wagePerHours">
            <h4>{t('mainPanel.list.search.wagePerHour')}</h4>
          </label>
          <input type="number" onMouseLeave={(e) => onChangeHandler('wagePerHour', e.target.value)}
            onKeyDown={(e) => onChangeHandler('wagePerHour', e.target.value)}
            onChange={(e) => onChangeHandler('wagePerHour', e.target.value)} min={33} defaultValue={33} />
        </div>
        <div className="col-md-12">
          <label htmlFor="driver">
            <h4>{t('mainPanel.list.search.driver')}</h4>
          </label>
          <input type="radio" name="driver" onChange={(e) => onChangeHandler('driverToWork', e.target.checked)} /> {t('mainPanel.list.search.yes')}
          <input type="radio" checked name="driver" onChange={(e) => onChangeHandler('driverToWork', e.target.checked)} /> {t('mainPanel.list.search.no')}
        </div>
        <div className="col-md-12">
          <label htmlFor="lunch">
            <h4>{t('mainPanel.list.search.lunch')}</h4>
          </label>
          <input type="radio" name="lunch" onChange={(e) => onChangeHandler('lunch', e.target.checked)} /> {t('mainPanel.list.search.yes')}
          <input type="radio" checked name="lunch" onChange={(e) => onChangeHandler('lunch', e.target.checked)} /> {t('mainPanel.list.search.no')}
        </div>
        <div className="col-md-12">
          <label htmlFor="living">
            <h4>{t('mainPanel.list.search.living')}</h4>
          </label>
          <input type="radio" onChange={(e) => onChangeHandler('living', e.target.checked)} name="living" /> {t('mainPanel.list.search.yes')}
          <input type="radio" checked onChange={(e) => onChangeHandler('living', e.target.checked)} name="living" /> {t('mainPanel.list.search.no')}
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