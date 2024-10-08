// src/Header.js
import React, { useState } from 'react';
import './../styles/Header.css'
import logo from './../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-desktop">
          <nav>
            <div className="logo"><a href="#home"><img src={logo} alt="Logo" /></a></div>
           
            <ul className='vinculos'>

              <li><a href="#link1">INICIO</a></li>
              <li><a href="#link2">SERVICIOS</a></li>
              <li><a href="#link3">CONTACTO</a></li>
              <li><a href="#link4">TIENDA</a></li>
              <li><a href="#link5">GALERIA</a></li>
              

            </ul>
          </nav>
        </div>
        <div className="header-mobile">
          <a href="#home" className="logo"><img src={logo} alt="Logo" /></a>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="hamburger-icon">&#9776;</span>
          </button>
        </div>

        {menuOpen && (
          <div className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}>
            <div className="mobile-menu-header">
              <a href="#home" className="logo"><img src={logo} alt="Logo" /></a>
              <button className="close" onClick={closeMenu}>&times;</button>
            </div>
            <nav>
              <ul>
                <li><a href="#link1" onClick={closeMenu}>INICIO</a></li>
                <li><a href="#link2" onClick={closeMenu}>SERVICIOS</a></li>
                <li><a href="#link3" onClick={closeMenu}>CONTACTO</a></li>
                <li><a href="#link4" onClick={closeMenu}>TIENDA</a></li>
                <li><a href="#link5" onClick={closeMenu}>GALERIA</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
