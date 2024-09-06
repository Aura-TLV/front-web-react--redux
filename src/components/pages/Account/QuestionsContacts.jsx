import { useTranslation } from "react-i18next";
// Импорт изображений
import QuestionsContactsImg1 from '../../../assets/img/fb_icon.svg';
import QuestionsContactsImg2 from '../../../assets/img/telegram_logo.svg';
import QuestionsContactsImg3 from '../../../assets/img/whatsapp_logo.svg';
//import SvgSmallPhone from '../../svgs/SvgSmallPhone';
//import whatsappLogo from '../../../assets/whatsapp logo.png';
//import telegramLogo from '../../../assets/telegram logo.png';

const QuestionsContacts = () => {

    const { t } = useTranslation();

    return (
        
                    <div className="d-flex flex-column justify-content-between align-items-center window-help">
                        <h4 className="text-center fw-bold mb-0">{t('qc.line1')}</h4>
                        <h4 className="text-center fw-bold">{t('qc.line2')}:</h4>
                        <div className="my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" className="fs-4">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path>
                            </svg>
                            <span className="fw-bold">+972548105947</span>
                        </div>
                        <div className="d-inline-flex">
                            <div className="px-2">
                                <a href='https://wa.me/972535220057?text=%2Fstart' target='_blank'>
                                <img src={QuestionsContactsImg1} />
                                </a>
                            </div>
                            <div className="px-2">
                                <a href='https://t.me/avielhelper_bot' target='_blank'>
                                <img src={QuestionsContactsImg2} />
                                </a>
                            </div>
                            <div className="px-2">
                                <a href='https://wa.me/972535220057?text=%2Fstart' target='_blank'>
                                <img src={QuestionsContactsImg3} />
                                </a>
                            </div>
                        </div>
                    </div>
                
    )
}

export default QuestionsContacts