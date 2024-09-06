//import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './../../assets/styles/main.css';
import './Navbar-Right-Links-icons.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const getCurrentLanguage = () => i18n.language;
  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <nav id="menu" className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="custom-navbar navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
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
              <NavLink className="nav-link" to="/about-us#target-section">
                {t('nav.howTo')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">
                {t('nav.contacts')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/account">
                {t('nav.login')}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <select
                className="form-select"
                defaultValue={getCurrentLanguage()}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="he">HE</option>
                <option value="ar">AR</option>
                <option value="en">EN</option>
                <option value="uk">UA</option>
                <option value="ru">RU</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


