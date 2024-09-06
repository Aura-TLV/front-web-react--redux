//import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import logoImg from './../../assets/img/aviel-logo.svg';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row align-items-center">
        <div className="col-4 d-flex align-items-center">
          <Logo logo={logoImg} />
        </div>
        <div className="col-8 d-flex justify-content-end align-items-center">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;


