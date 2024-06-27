import { useState } from 'react';
import { regNewUser, sendCVToEmail, sendEmail, sendToBitrix, uploadCV } from '../../../utils/fetcher';
import passwordGenerator from '../../../utils/passwordGenerator';
import getUserStatusForRecruiter from '../../../utils/getUserStatusForRecruiter';
import { useTranslation } from "react-i18next";
import UserTypesEnum from '../../../enums/UserTypes.enum';

const VITE_ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
let fileReader, cvContents;

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

    const [cv, setCV] = useState(null);

    const onChangeHandler = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const cvSelectedHandler = (file) => {
        setCV(file);
        
        fileReader = new FileReader();
        fileReader.onloadend = cvParsedHandler;
        fileReader.readAsArrayBuffer(file);
    };

    const cvParsedHandler = () => {
        const fileContents = fileReader.result;
        console.log(fileContents)
        cvContents = fileContents;
    }

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

        await uploadCV(cv, formData.phone);

        if (cvContents) {
            await sendCVToEmail({
                userName: formData.name,
                fileType: cv.type,
                fileContents: cvContents,
                fileName: cv.name,
                emailTo: VITE_ADMIN_EMAIL
            })
        }
        
        alert(finalMsg);
    }

    return (
        <form onSubmit={e => submitHandler(e, t('mainPanel.reg.finalMessage'))}>
            <div className="col-md-12">
                <label htmlFor="name">{t('mainPanel.reg.candidate.name')}</label>
                <input type="text"
                    onKeyDown={(e) => onChangeHandler('name', e.target.value)}
                    onChange={(e) => onChangeHandler('name', e.target.value)}
                    id="name" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="age">{t('mainPanel.reg.candidate.age')}</label>
                <input type="number"
                    onMouseLeave={(e) => onChangeHandler('age', e.target.value)}
                    onKeyDown={(e) => onChangeHandler('age', e.target.value)}
                    onChange={(e) => onChangeHandler('age', e.target.value)}
                    id="age" defaultValue={16} min={16} max={89} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="email">{t('mainPanel.reg.candidate.eMail')}</label>
                <input type="email"
                    onKeyDown={(e) => onChangeHandler('eMail', e.target.value)}
                    onChange={(e) => onChangeHandler('eMail', e.target.value)}
                    id="email" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="phone">{t('mainPanel.reg.candidate.phone')}</label>
                <input type="text"
                    onKeyDown={(e) => onChangeHandler('phone', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('phone', e.target.value)}
                    onChange={(e) => onChangeHandler('phone', e.target.value)}
                    id="phone" />
            </div>
            <div className="col-md-12">
                <label htmlFor="status">{t('mainPanel.reg.candidate.status.label')}</label>
                <select
                    onMouseLeave={(e) => onChangeHandler('status', e.target.value)}
                    onChange={(e) => onChangeHandler('status', e.target.value)}
                    id="status">
                    <option value="teudat-zeut">{t('mainPanel.reg.candidate.status.t1')}</option>
                    <option value="work-visa">{t('mainPanel.reg.candidate.status.t2')}</option>
                    <option value="tour-visa">{t('mainPanel.reg.candidate.status.t3')}</option>
                    <option value="blue-paper">{t('mainPanel.reg.candidate.status.t4')}</option>
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="vacancy">{t('mainPanel.reg.candidate.vacancy')}</label>
                <input type="text"
                    onKeyDown={(e) => onChangeHandler('vacancy', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('vacancy', e.target.value)}
                    onChange={(e) => onChangeHandler('vacancy', e.target.value)}
                    id="vacancy" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="city">{t('mainPanel.reg.candidate.city')}</label>
                <input type="text"
                    onKeyDown={(e) => onChangeHandler('city', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('city', e.target.value)}
                    onChange={(e) => onChangeHandler('city', e.target.value)}
                    id="city" />
            </div>
            <div className="col-md-12">
                <label htmlFor="cv">{t('mainPanel.candidate.cv')}</label>
                <input type="file" accept='application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf' name='cv' onChange={(e) => cvSelectedHandler(e.target.files[0])} id="cv" />
                
            </div>
            <div className="col-md-12">
                <button type="submit">{t('mainPanel.reg.btnSubmit')}</button>
            </div>
        </form>
    )
}

export default RegCandidateForm