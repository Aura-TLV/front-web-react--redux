import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Advert = ({ data }) => {

    const { t } = useTranslation();

    const [moreInfo, setMoreInfo] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);

    const toggleAd = (e) => {
        e.preventDefault();
        setMoreInfo(!moreInfo);
    };

    const btnSendHandler = (e, alertText) => {
        // TODO: think of realization
        e.preventDefault();
        alert(alertText);
    };

    const {
        number,
        name,
        images,
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

    const galleryList = images.length > 0 ? images.map((image) => {
        return { src: image, width: 1280, height: 720 }
    }) : [];

    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className='advert-h1'>#{number} - {name} ({city})</h1>
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
                    <b>{t('mainPanel.list.ads.break')}:</b> {workBreak.exists ? `${workBreak.lengthMin} ${t('mainPanel.list.ads.minutes')}` : t('mainPanel.list.ads.no')}&nbsp;
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
                {/* gallery start */}
                {galleryList.length > 1 && <div className="col-md-12">
                    <a href="#" onClick={() => setGalleryOpen(true)}>{t('mainPanel.list.ads.images')}</a>
                </div>}
                {galleryList.length > 1 && <Lightbox
                    open={galleryOpen}
                    close={() => setGalleryOpen(false)}
                    slides={galleryList}
                />}
                
                {/* gallery end */}
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
                <button onClick={e => btnSendHandler(e, t('mainPanel.list.ads.btnSendClicked'))}>
                    {t('mainPanel.list.ads.btnSend')}
                </button>
            </div>
        </div>
    )
}

export default Advert