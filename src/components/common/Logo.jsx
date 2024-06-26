import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  const { t } = useTranslation();
  
  return (
    <NavLink to="/" title={t('general.goToHomePage')}>
      <img src={logo} width={'335px'} height={'96px'} alt="logo" className="float-start my-100" style={{margin: '12px 150px'}}/>
    </NavLink>
  )
}

export default Logo