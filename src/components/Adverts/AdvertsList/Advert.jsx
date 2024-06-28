import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Advert = ({ data }) => {

    const { t } = useTranslation();

    const [moreInfo, setMoreInfo] = useState(false);

    const toggleAd = (e) => {
        e.preventDefault();
        setMoreInfo(!moreInfo);
    };

    const {
        number,
        name,
        city,
        wagePerHour,
        workingHoursStart,
        workingHoursEnd,
        driver,
        morningShift,
        nightShift,
        workBreak,
        lunch,
        living,
        bonuses,
        additionalInfo
    } = data;

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>#{number} - {name} ({city})</h1>
            </div>
            <div className="col-md-12">
                <b>{t('mainPanel.list.ads.wagePerHour')}:</b> {wagePerHour}₪&nbsp;
                <b>{t('mainPanel.list.ads.workingHours')}:</b> {workingHoursStart}-{workingHoursEnd}&nbsp;
                <b>{t('mainPanel.list.ads.driver')}:</b> {
                    driver ? t('mainPanel.list.ads.yes')
                        : t('mainPanel.list.ads.no')
                }&nbsp;
            </div>
            <div id="more" style={moreInfo ? { display: 'block' } : { display: 'none' }}>
                <div className="col-md-12">
                    <b>{t('mainPanel.list.ads.shifts.label')}:</b> {t('mainPanel.list.ads.shifts.morning')} ({morningShift}), {t('mainPanel.list.ads.shifts.night')} ({nightShift})
                </div>
                <div className="col-md-12">
                    <b>{t('mainPanel.list.ads.break')}:</b> {workBreak}&nbsp;
                    <b>{t('mainPanel.list.ads.lunch')}:</b> {lunch ? t('mainPanel.list.ads.yes')
                        : t('mainPanel.list.ads.no')}&nbsp;
                    <b>{t('mainPanel.list.ads.living')}:</b> {living ? t('mainPanel.list.ads.yes')
                        : t('mainPanel.list.ads.no')}&nbsp;
                    <b>{t('mainPanel.list.ads.bonus')}:</b> {bonuses ? t('mainPanel.list.ads.yes')
                        : t('mainPanel.list.ads.no')}&nbsp;
                </div>
                <div className="col-md-12">
                    <b>{t('mainPanel.list.ads.additionalInfo')}:</b> {additionalInfo}
                </div>
                <div className="col-md-12">
                    <a href="https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2022/08/23/11/5553518/20b027491f7209ca6f58a3ccc4983183b270ca4a.jpg" target='_blank'>{t('mainPanel.list.ads.images')}</a>
                </div>
            </div>

            <div className="col-md-12">
                <a href="#" onClick={e => toggleAd(e)}>
                    {moreInfo ? 
                    t('mainPanel.list.ads.less') 
                    : t('mainPanel.list.ads.more') 
                }
                </a>
            </div>
            <div className="col-md-12">
                <button>
                    {t('mainPanel.list.ads.btnSend')}
                </button>
            </div>
        </div>
    )
}

export default Advert