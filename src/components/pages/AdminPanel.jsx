import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
//import CookieConsent from "react-cookie-consent";
//import AdvertsList from "./Adverts/AdvertsList";
//import AdvertsSearch from "./Adverts/AdvertsSearch";
//import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';
import { useEffect } from "react";
import changeHTMLDirection from "../../utils/changeHTMLDirection";
//FilterSection это компонент аналогчный AdvertsSearch только с моей версткой

import FilterSectionAdmin from "./Admin/FilterSectionAdmin";
import FormCandidate from "./Admin/FormCandidate";
import FormHR from "./Admin/FormHR";
import TableCompanies from "./Admin/TableCompanies";
import TableCandidates from "./Admin/TableCandidates";

const AdminPanel = () => {

  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const currentLanguage = i18n.language.split('-')[0];
    changeHTMLDirection(currentLanguage);
  }, [i18n.language]);

  let FormComponent;
  switch (location.pathname) {
    case '/admin-hr':
      FormComponent = FormHR;
      break;
    case '/admin-candidate':
      FormComponent = FormCandidate;
      break;
    case '/admin-companies':
        FormComponent = TableCompanies;
        break;
    case '/admin-candidates':
        FormComponent = TableCandidates;
        break;
    default:
      FormComponent = null; 
  }

  return (
    <>
    
     <hr className="p-0 m-0" style={{height: '3px', background: 'var(--bs-emphasis-color)'}} />
     <section>
      <div className="container">
        <div className="row">
        <FilterSectionAdmin />
        {FormComponent && <FormComponent />}
        


        </div>
      </div>
     </section>

     
      
    </>
  )
}

export default AdminPanel;