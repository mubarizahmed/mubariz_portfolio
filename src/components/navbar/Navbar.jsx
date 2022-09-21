import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BrowserRouter, Route, Link } from "react-router-dom";

// TODO: Make logo
import Logo from '../../assets/logo.svg';
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} />
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/" >info</Link>
        <Link className="navbar-link" to="/projects" >projects</Link>
        <Link className="navbar-link" to="/projects" >other</Link>
      </div>
    </nav>
  );
};

export default Navbar;
