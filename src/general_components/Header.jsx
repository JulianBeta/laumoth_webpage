// src/Header.js
import React, { useState } from 'react';
import './../styles/Header.css'
import logo from './../assets/logo.png'
import ScrollLink from '../components/ScrollLink.jsx';

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
              <li><ScrollLink to="inicio" onClick={closeMenu}>INICIO</ScrollLink></li>
              <li><ScrollLink to="servicios" onClick={closeMenu}>SERVICIOS</ScrollLink></li>
              <li><ScrollLink to="contacto" onClick={closeMenu}>CONTACTO</ScrollLink></li>
              <li><ScrollLink to="tienda" onClick={closeMenu}>TIENDA</ScrollLink></li>
              <li><ScrollLink to="galeria" onClick={closeMenu}>GALERIA</ScrollLink></li>
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
                <li><ScrollLink to="inicio" onClick={closeMenu}>INICIO</ScrollLink></li>
                <li><ScrollLink to="servicios" onClick={closeMenu}>SERVICIOS</ScrollLink></li>
                <li><ScrollLink to="contacto" onClick={closeMenu}>CONTACTO</ScrollLink></li>
                <li><ScrollLink to="tienda" onClick={closeMenu}>TIENDA</ScrollLink></li>
                <li><ScrollLink to="galeria" onClick={closeMenu}>GALERIA</ScrollLink></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
