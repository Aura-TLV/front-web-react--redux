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
        <div className="form-decoration">
            <form onSubmit={e => submitHandler(e, t('mainPanel.reg.finalMessage'))}>
                <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="text" id="name" placeholder={t('mainPanel.reg.company.name')} required="" autoFocus=""
                onKeyDown={(e) => onChangeHandler('name', e.target.value)}
                onMouseLeave={(e) => onChangeHandler('name', e.target.value)}
                onChange={(e) => onChangeHandler('name', e.target.value)} 
                />
                <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="text" id="profile" placeholder={t('mainPanel.reg.company.profile')} required=""
                onKeyDown={(e) => onChangeHandler('profile', e.target.value)}
                onMouseLeave={(e) => onChangeHandler('profile', e.target.value)}
                onChange={(e) => onChangeHandler('profile', e.target.value)} 
                />
                <input className="form-control text-center fw-semibold mb-3 py-2 border-0" type="tel" id="phone" inputMode="tel" required="" pattern="05\d{1}[-\s]*\d{3}[-\s]*\d{4}" placeholder={t('mainPanel.reg.company.phone')}
                onKeyDown={(e) => onChangeHandler('phone', e.target.value)}
                onMouseLeave={(e) => onChangeHandler('phone', e.target.value)}
                onChange={(e) => onChangeHandler('phone', e.target.value)}
                />
                <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="text" placeholder={t('mainPanel.reg.login')} inputMode="latin" required="" />
                <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="email" id="email" name="email" placeholder={t('mainPanel.reg.company.eMail')} inputMode="email" required=""
                onKeyDown={(e) => onChangeHandler('eMail', e.target.value)}
                onMouseLeave={(e) => onChangeHandler('eMail', e.target.value)}
                onChange={(e) => onChangeHandler('eMail', e.target.value)} 
                />
                <div className="position-relative">
                    <input className="border rounded-pill form-control text-center fw-semibold mb-3 py-2 border-0" type="password" id="passwordInput-1" placeholder={t('mainPanel.reg.password')} required="" autoComplete="on" inputMode="latin" />
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-eye position-absolute" id="togglePassword-1" style={{top: '50%', right: '20px', transform: 'translateY(-50%)', width: '30px', height: '20px'}}>
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

export default RegCompanyForm