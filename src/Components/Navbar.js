import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div id="menu">
        <div id="menu-bar" onClick={toggleMenu} className={isOpen ? 'change' : ''}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={`nav ${isOpen ? 'change' : ''}`}>
          <ul>
            <li><Link to="/home" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          </ul>
        </nav>
      </div>
      <div className={`menu-bg ${isOpen ? 'change-bg' : ''}`}></div>
    </div>
  );
};

export default Navbar;
