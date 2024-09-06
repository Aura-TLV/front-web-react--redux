import { useState } from 'react';
//import { Buffer } from 'buffer';
import { regNewUser, sendCVToEmail, sendEmail, sendToBitrix, uploadCV } from '../../../utils/fetcher';
import passwordGenerator from '../../../utils/passwordGenerator';
import getUserStatusForRecruiter from '../../../utils/getUserStatusForRecruiter';
import { useTranslation } from "react-i18next";
import UserTypesEnum from '../../../enums/UserTypes.enum';


//const VITE_ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
//let fileReader, cvContents;
let cvContents;

const RegCandidateForm = () => {

    const { t, i18n } = useTranslation();

    const getEmailTitle = (language = 'en') => {
        if (language === 'he') return 'הסיסמה שלך';
        if (language === 'ru') return 'ваш пароль';
        return 'your password';
    };

    const getEmailLoginString = (language = 'en') => {
        if (language === 'he') return 'היכנס לאזור האישי שלך';
        if (language === 'ru') return 'Перейти в личный кабинет';
        return 'Log in to your personal area';
    };

    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        eMail: '',
        phone: '',
        status: 'teudat-zeut',
        vacancy: '',
        city: '',
    });

    //const [cv, setCV] = useState(null);

    const onChangeHandler = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    /*const cvSelectedHandler = (file) => {
        // TODO: fix buffer for nodemail
        setCV(file);
        
        fileReader = new FileReader();
        fileReader.onloadend = cvParsedHandler;
        fileReader.readAsArrayBuffer(file);
    };

    const cvParsedHandler = () => {
        const fileContents = Buffer.from(fileReader.result, 'base64');
        cvContents = fileContents;
    }*/

    const submitHandler = async (e, finalMsg) => {
        e.preventDefault();
        const password = passwordGenerator();
        const language = i18n.language.split('-')[0];

        await sendEmail(getEmailTitle(language), getEmailLoginString(language), password, formData.eMail);

        await sendToBitrix({
            leadTitle: `Заявка на кандидата ${formData.name || ''}`,
            userFirstName: formData.name,
            userLastName: '',
            phone: formData.phone,
            userWhatsappPhone: formData.phone, // to match validation
            userWage: 33,
            userType: UserTypesEnum.Employee,
            leadInfo: `
            Возраст: ${formData.age ? parseInt(formData.age) : '(не указан)'}\n
            Город: ${formData.city || '(не указан)'}\n
            Телефон: ${formData.phone || '(не указан)'}\n
            Что ищет: ${formData.vacancy || '(не указано)'}\n
            Статус в стране: ${getUserStatusForRecruiter(formData.status)}`
        });

        await regNewUser({
            name: { ru: formData.name, en: formData.name, he: formData.name },
            phone: formData.phone,
            password,
            age: formData.age,
            location: { city: formData.city },
            status: formData.status,
            eMail: formData.eMail
        });

        //await uploadCV(cv, formData.phone);
        await uploadCV(formData.phone);

        if (cvContents) {
            await sendCVToEmail({
                userName: formData.name,
                //fileType: cv.type,
                fileContents: cvContents,
                //fileName: cv.name,
                //emailTo: VITE_ADMIN_EMAIL
            })
        }
        
        alert(finalMsg);
    }

    return (
        <div className="form-decoration">
    <form onSubmit={e => submitHandler(e, t('mainPanel.reg.finalMessage'))}>
        <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="text" id="name" placeholder={t('mainPanel.reg.candidate.name')} required=""
        onKeyDown={(e) => onChangeHandler('name', e.target.value)}
        onChange={(e) => onChangeHandler('name', e.target.value)}
        />
        <input className="form-control text-center fw-semibold mb-3 py-2 border-0" type="tel" id="phone" placeholder={t('mainPanel.reg.candidate.phone')} inputMode="tel" required="" pattern="05\d{1}[-\s]*\d{3}[-\s]*\d{4}"
        onKeyDown={(e) => onChangeHandler('phone', e.target.value)}
        onMouseLeave={(e) => onChangeHandler('phone', e.target.value)}
        onChange={(e) => onChangeHandler('phone', e.target.value)}
        />
        <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="text" placeholder={t('mainPanel.reg.login')} inputMode="latin" required="" />
        <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="email" id="email" name="email" placeholder={t('mainPanel.reg.candidate.eMail')} inputMode="email" required=""
        onKeyDown={(e) => onChangeHandler('eMail', e.target.value)}
        onChange={(e) => onChangeHandler('eMail', e.target.value)}
        /> 
        <div className="position-relative">
            <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="password" id="passwordInput" placeholder={t('mainPanel.reg.password')} required="" autoComplete="on" inputMode="latin" />
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-eye position-absolute" id="togglePassword" style={{top: '50%', right: '20px', transform: 'translateY(-50%)', width: '30px', height: '20px'}}>
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
            </svg>
        </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3" type="submit">{t('mainPanel.reg.btnReg')}</button>
        </div>
    </form>
</div>
    )
}

export default RegCandidateForm