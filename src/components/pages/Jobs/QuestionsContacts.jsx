import { useTranslation } from "react-i18next";
import SvgSmallPhone from '../../svgs/SvgSmallPhone';
import whatsappLogo from '../../../assets/whatsapp logo.png';
import telegramLogo from '../../../assets/telegram logo.png';

const QuestionsContacts = () => {

    const { t } = useTranslation();

    return (
        <div className="questionsContacts">
            <div className="questionsContacts-inner">
                <p className='highlight'>{t('qc.line1')}</p>
                <p className='highlight'>{t('qc.line2')}</p>
                <p className='saira'>
                    <SvgSmallPhone />
                    <b>
                        <a className='contactFormLink' href="tel:+972535220057">+972535220057</a>
                    </b>
                </p>
                <a href='https://wa.me/972535220057?text=%2Fstart' target='_blank'>
                    <img src={whatsappLogo} alt="whatsapp" />
                </a>
                <a href='https://t.me/avielhelper_bot' target='_blank'>
                    <img src={telegramLogo} alt="telegram" />
                </a>
            </div>

        </div>
    )
}

export default QuestionsContacts