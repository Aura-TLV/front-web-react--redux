import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.png';
import Logo from './components/common/Logo';
import Navbar from './components/common/Navbar';

import NotFound from './components/pages/NotFound';

import './i18n';
import Jobs from './components/pages/Jobs';
import About from './components/pages/About';
import HowTo from './components/pages/HowTo';
import Contacts from './components/pages/Contacts';

const App = () => {
    return (
        <Router>

            <header className="row">
                <div className="col-4">
                    <Logo logo={logo} />
                </div>
                <div className="col-8">
                    <Navbar />
                </div>
            </header>

            <Routes>
                <Route path='/' element={<Jobs />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/how-to' element={<HowTo />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;
