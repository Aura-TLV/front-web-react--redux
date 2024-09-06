import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  const { t } = useTranslation();
  
  return (
    <NavLink to="/" title={t('general.goToHomePage')} className="logo-container">
      <img src={logo} alt="logo" className="logo" />
    </NavLink>
  )
}

export default Logo;

