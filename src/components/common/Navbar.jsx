import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';
import './Navbar.css';

const Navbar = () => {

    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const getCurrentLanguage = () => {
        return i18n.language.split('-')[0];
    }


    return (
        <nav id="menu" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <ul className="custom-navbar navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/jobs">
                            {t('nav.jobs')}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about-us">
                            {t('nav.aboutUs')}
                        </NavLink>
                    </li>
                    <li className="nav-item">

                        <NavLink className="nav-link" to="/how-to">
                            {t('nav.howTo')}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contacts">
                            {t('nav.contacts')}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            {t('nav.login')}
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <select className="form-select"
                            defaultValue={getCurrentLanguage()}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="he">HE</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar