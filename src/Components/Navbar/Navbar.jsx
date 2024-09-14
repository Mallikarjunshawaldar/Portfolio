import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav>
      <div className="logo">Mallikarjun</div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <img
        src={isDarkMode ? assets.moon : assets.sun}
        alt="Toggle Theme"
        className="navbar-image"
        onClick={toggleTheme}
      />
    </nav>
  );
}

export default Navbar;
