import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-1.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const goToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        <div className="navbar-logo">
          <img src={Logo} alt="Mubariz Ahmed"/>
        </div>
      </Link>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">
          info
        </Link>
        <Link className="navbar-link" to="/projects">
          projects
        </Link>
        <Link className="navbar-link" to="/projects">
          other
        </Link>
      </div>
      <Link className="navbar-button" >
        <button type="button" onClick={() => goToContact()}>Contact</button>
      </Link>
      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            color="var(--color-current)"
            size={27}
            onClick={() => setToggleMenu(false)}
            className="menu-icon"
          />
        ) : (
          <RiMenu3Line
            color="var(--color-current)"
            size={27}
            onClick={() => setToggleMenu(true)}
            className="menu-icon"
          />
        )}
        {toggleMenu && (
          <div className="menu-container" onClick={() => setToggleMenu(false)}>
            <Link className="navbar-link" to="/">
              info
            </Link>
            <Link className="navbar-link" to="/projects">
              projects
            </Link>
            <Link className="navbar-link" to="/projects">
              other
            </Link>
            <div className="navbar-button menu-button">
              <button type="button" onClick={() => goToContact()}>Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
