import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import Logo from './components/common/Logo';
import Navbar from './components/common/Navbar';
import NavbarAdminPanel from './components/common/NavbarAdminPanel';
import NotFound from './components/pages/NotFound';
import Resume from './components/pages/Resume';
import Jobs from './components/pages/Jobs';
import About from './components/pages/About';
import HowTo from './components/pages/HowTo';
import Contacts from './components/pages/Contacts';
import Account from './components/pages/Account';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import ConfirmationCode from './components/pages/Login/ConfirmationCode';
import Adverts from './components/pages/Adverts';
import AdminPanel from './components/pages/AdminPanel';
import './App.css'
import './i18n';

const App = () => {
    return (
        <Router>
            <MainComponent />
        </Router>
    )
}

const MainComponent = () => {
    const location = useLocation();
    const [isAdminRoute, setIsAdminRoute] = useState(false);

    useEffect(() => {
        setIsAdminRoute(location.pathname.startsWith('/admin-'));
    }, [location]);

    return (
        <>
            <header className="container-fluid">
                <div className="row align-items-start">
                    <div className="col-4 d-flex align-items-start">
                        <Logo logo={logo} />
                    </div>
                    <div className="col-8 d-flex justify-content-end align-items-start">
                        {isAdminRoute ? <NavbarAdminPanel /> : <Navbar />}
                    </div>
                </div>
            </header>
            <Routes>
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/adverts' element={<Adverts />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/how-to' element={<HowTo />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/account' element={<Account />} />
                <Route path='/reg' element={<Registration />} />
                <Route path='/confirm' element={<ConfirmationCode />} />
                <Route path='/' element={<Login />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/admin-hr' element={<AdminPanel />} />
                <Route path='/admin-candidate' element={<AdminPanel />} />
                <Route path='/admin-companies' element={<AdminPanel />} />
                <Route path='/admin-candidates' element={<AdminPanel />} />
            </Routes>
        </>
    );
}

export default App;
