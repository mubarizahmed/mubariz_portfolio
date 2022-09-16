import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// TODO: Make logo
//import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mp__navbar">
      <div className="mp__navbar-links">
        <div className="mp__navbar-links_logo">
          {/* <img src={logo} /> */}
          <p>MUBARIZ AHMED</p>
        </div>
        <div className="mp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#experience">Experience</a></p>
          <p><a href="#education">Education</a></p>
          <p><a href="#competencies">Competencies</a></p>

          {/* // TODO: Add all section headers */}
        </div>
      </div>
      <div className="mp__navbar-contact">
        <button type="button">Contact</button>
      </div>
      {/* Hamburger menu */}
      <div className="mp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mp__navbar-menu_container scale-up-center">
          <div className="mp__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#experience">Experience</a></p>
            <p><a href="#education">Education</a></p>
            <p><a href="#competencies">Competencies</a></p>
          </div>
          <div className="mp__navbar-menu_container-links-contact">
            <button type="button">Contact</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;