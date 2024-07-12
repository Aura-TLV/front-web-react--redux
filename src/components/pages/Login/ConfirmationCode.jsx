import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { sendVerificationCodeConfirmation } from "../../../utils/fetcher";
import changeHTMLDirection from "../../../utils/changeHTMLDirection";

const ConfirmationCode = () => {

    const { t, i18n } = useTranslation();

    const [otp, setOtp] = useState('');

    const confirmationCodeFormHandler = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) return;
        // TODO: state handle phone!!!!
        await sendVerificationCodeConfirmation('', otp);
    }

    useEffect(() => {
        const currentLanguage = i18n.language.split('-')[0];
        changeHTMLDirection(currentLanguage);
    }, [i18n.language]);

    return (
        <div className="row">
            <form onSubmit={e => confirmationCodeFormHandler(e)}>
                <div className="col-md-12">
                    <p>{t('mainPanel.login.confirmationCode')}</p>
                    <p>
                        <input type="text" onChange={e => setOtp(e.target.value)} maxLength={6} required />
                    </p>
                    <p>
                        <button type="submit">OK</button>
                    </p>
                </div>
            </form>
        </div>

    )
}

export default ConfirmationCode