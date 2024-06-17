import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const NotFound = () => {

  const { t } = useTranslation();

  return (
    <>
        <div>{t('general.notFound')}</div>
        <Link to='/'>{t('general.goToHomePage')}</Link>
    </>
  )
}

export default NotFound