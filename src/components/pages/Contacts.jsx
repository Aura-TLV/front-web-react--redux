import { useTranslation } from "react-i18next";

const Contacts = () => {

  const { t } = useTranslation();


  return (
    <div>
        <h1>{t('nav.contacts')}</h1>
        <p>
          <a className="contactFormLink" href="https://wa.me/972535220057?text=%2Fstart" target="_blank">
            {t('static.contacts.whatsapp')}
          </a>
        </p>
        <p><a className="contactFormLink" href="https://t.me/avielhelper_bot" target="_blank">
            {t('static.contacts.telegram')}
        </a></p>
        <p><a className="contactFormLink" href="https://b24-cfumk4.bitrix24site.ru/crm_form_wgyxv/" target="_blank">
            {t('static.contacts.form')}
        </a></p>
    </div>
    
  )
}

export default Contacts