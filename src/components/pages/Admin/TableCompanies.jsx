import { useState } from 'react';
import { useTranslation } from "react-i18next";
//import { Link } from 'react-router-dom';
import FormHR from "./FormHR";
import TablePagination from "./TablePagination";
// import images
import '../../../assets/styles/main.css';
// Импорт js
import '../../../assets/js/collapse-form-script.js';
import '../../../assets/js/collapse-script.js';


const TableCompanies = () => {
  const { t, i18n } = useTranslation();

  const isRtl = ['he', 'ar'].includes(i18n.language.split('-')[0]); // иврит и арабский
  

  const [detailsShown, setDetailsShown] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Примерное количество страниц

  const formatPhoneNumber = (phoneNumber, isRtl) => {
    if (isRtl) {
      return phoneNumber.replace('+', '') + '+';
    }
    return phoneNumber;
  };
  

  

  return (
    <div className="col-md-9 py-4">
                    <div className="table-responsive">
                    {!detailsShown ? (
                      <>
                        <table className="table table-hover table-bordered border-3 border-black">
                            <thead>
                                <tr>
                                    <th style={{background: '#f0f0f0', textAlign: 'center'}}>ID</th>
                                    <th style={{background: '#e6e6e6', textAlign: 'center'}}>{t('mainPanel.company.companyName')}</th>
                                    <th style={{background: '#f0f0f0', textAlign: 'center'}}>{t('filterAdmin.vacancy')}</th>
                                    <th style={{background: '#e6e6e6', textAlign: 'center'}}>{t('mainPanel.company.phone')}</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47<span>
                                    <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.01')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#faf9f9'}}>6626b36b5c7839e305fcee47
                                      <span>
                                      <button onClick={() => setDetailsShown(true)} style={{
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer'
}}>(info)</button>
                                      </span></td>
                                    <td style={{background: '#f0f0f0'}}>ТОО СУПЕР</td>
                                    <td style={{background: '#faf9f9'}}>{t('companyAccount.yourAdds.03')}</td>
                                    <td style={{background: '#f0f0f0'}}>{formatPhoneNumber("+972541234567", isRtl)}</td>
                                </tr>
                                
                                
                                
     
                              
                            </tbody>
                        </table>
                        <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
                        ) : (
                          <FormHR setDetailsShown={setDetailsShown} />
                        )}
                    </div>
        </div>
    

    
    
  );
}

export default TableCompanies;
