import { useState } from 'react';
import { regNewCompany, sendEmail, sendToBitrix } from '../../../utils/fetcher';
import passwordGenerator from '../../../utils/passwordGenerator';
import { useTranslation } from "react-i18next";
import UserTypes from '../../../enums/UserTypes.enum';

const RegCompanyForm = () => {

    const { t, i18n } = useTranslation();

    const getEmailTitle = (language = 'en') => {
        if (language === 'he') return 'הסיסמה שלך - חברה';
        if (language === 'ru') return 'ваш пароль - компания';
        return 'your password - company';
    };

    const getEmailLoginString = (language = 'en') => {
        if (language === 'he') return 'היכנס לאזור האישי שלך';
        if (language === 'ru') return 'Перейти в личный кабинет';
        return 'Log in to your personal area';
    };

    const [formData, setFormData] = useState({
        name: '',
        profile: '',
        jobs: '',
        workersQuantity: 0,
        phone: '',
        eMail: '',
        workStart: '',
        workFinish: '',
        city: ''
    });

    const onChangeHandler = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const submitHandler = async (e, finalMsg) => {
        e.preventDefault();
        const password = passwordGenerator();
        const language = i18n.language.split('-')[0];

        await sendEmail(getEmailTitle(language), getEmailLoginString(language), password, formData.eMail);

        await sendToBitrix({
            leadTitle: `Заявка на рекрутера, компания ${formData.name}`,
            userFirstName: '',
            userLastName: '',
            phone: formData.phone,
            userWhatsappPhone: formData.phone, // to match validation
            userWage: 33,
            userType: UserTypes.Recruiter,
            leadInfo: `О компании - ${
            formData.profile || "(нет информации)"
            }\nКол-во человек - ${
            formData.workersQuantity || "(нет информации)"
            }\nТелефонный номер - ${
                formData.phone || "(не указан)"
            }\nEmail - ${
                formData.eMail || '(нет)'
            }\nЧасы работы - ${
                `${formData.workStart} - ${formData.workFinish}`
            }\nЛокация - ${formData.city || '(нет)'}`,
        });

        await regNewCompany({
            name: { ru: formData.name, en: formData.name, he: formData.name },
            profile: formData.profile,
            password,
            jobs: formData.jobs,
            workersQuantity: formData.workersQuantity,
            location: formData.city,
            eMail: formData.eMail,
            phone: formData.phone,
            workStart: formData.workStart,
            workEnd: formData.workFinish
        });

        alert(finalMsg);
    }

    return (
        <form onSubmit={e => submitHandler(e, t('mainPanel.reg.finalMessage'))}>
            <div className="col-md-12">
                <label htmlFor="name">{t('mainPanel.reg.company.name')}</label>
                <input type="text" 
                    onKeyDown={(e) => onChangeHandler('name', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('name', e.target.value)}
                    onChange={(e) => onChangeHandler('name', e.target.value)} 
                id="name" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="profile">{t('mainPanel.reg.company.profile')}</label>
                <input type="text" 
                    onKeyDown={(e) => onChangeHandler('profile', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('profile', e.target.value)}
                    onChange={(e) => onChangeHandler('profile', e.target.value)} 
                id="profile" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="jobs">{t('mainPanel.reg.company.positions')}</label>
                <input type="text" 
                    onKeyDown={(e) => onChangeHandler('jobs', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('jobs', e.target.value)}
                    onChange={(e) => onChangeHandler('jobs', e.target.value)} 
                id="jobs" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="workersQuantity">{t('mainPanel.reg.company.workersQuantity')}</label>
                <input type="number" 
                    onMouseLeave={(e) => onChangeHandler('workersQuantity', e.target.value)}
                    onKeyDown={(e) => onChangeHandler('workersQuantity', e.target.value)}
                    onChange={(e) => onChangeHandler('workersQuantity', e.target.value)} 
                id="workersQuantity" defaultValue={1} min={1} max={999} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="phone">{t('mainPanel.reg.company.phone')}</label>
                <input type="text"
                    onKeyDown={(e) => onChangeHandler('phone', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('phone', e.target.value)}
                    onChange={(e) => onChangeHandler('phone', e.target.value)}
                id="phone" />
            </div>
            <div className="col-md-12">
                <label htmlFor="email">{t('mainPanel.reg.company.eMail')}</label>
                <input type="email"
                        onKeyDown={(e) => onChangeHandler('eMail', e.target.value)}
                        onMouseLeave={(e) => onChangeHandler('eMail', e.target.value)}
                        onChange={(e) => onChangeHandler('eMail', e.target.value)} 
                        id="email" 
                required />
            </div>
            <div className="col-md-12">
                <label htmlFor="workStart">{t('mainPanel.reg.company.workingHours.start')}</label>
                <input type="time"
                    onKeyDown={(e) => onChangeHandler('workStart', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('workStart', e.target.value)}
                    onChange={(e) => onChangeHandler('workStart', e.target.value)}  
                defaultValue={'00:00'} />
            </div>
            <div className="col-md-12">
            <label htmlFor="workFinish">{t('mainPanel.reg.company.workingHours.finish')}</label>
            <input type="time" 
                    onKeyDown={(e) => onChangeHandler('workFinish', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('workFinish', e.target.value)}
                    onChange={(e) => onChangeHandler('workFinish', e.target.value)} 
                    id="workFinish"
            defaultValue={'00:00'} />
            </div>
            <div className="col-md-12">
                <label htmlFor="city">{t('mainPanel.reg.company.city')}</label>
                <input type="text"
                    onKeyDown={(e) => onChangeHandler('city', e.target.value)}
                    onMouseLeave={(e) => onChangeHandler('city', e.target.value)}
                    onChange={(e) => onChangeHandler('city', e.target.value)} 
                id="city" required />
            </div>
            <div className="col-md-12">
                <button type="submit">{t('mainPanel.reg.btnSubmit')}</button>
            </div>
        </form>
    )
}

export default RegCompanyForm