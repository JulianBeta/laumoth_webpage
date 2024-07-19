// src/Header.js
import React, { useState } from 'react';
import './../styles/Header.css'
import logo from './../../src/logo.svg'; // Ensure you have a logo image in your src directory

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
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
              <li className="logo"><a href="#home"><img src={logo} alt="Logo" /></a></li>
              <li><a href="#link3">Link 3</a></li>
              <li><a href="#link4">Link 4</a></li>
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
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <a href="#home" className="logo" onClick={closeMenu}><img src={logo} alt="Logo" /></a>
              <button className="close" onClick={closeMenu}>&times;</button>
            </div>
            <nav>
              <ul>
                <li><a href="#link1" onClick={closeMenu}>Link 1</a></li>
                <li><a href="#link2" onClick={closeMenu}>Link 2</a></li>
                <li><a href="#link3" onClick={closeMenu}>Link 3</a></li>
                <li><a href="#link4" onClick={closeMenu}>Link 4</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
