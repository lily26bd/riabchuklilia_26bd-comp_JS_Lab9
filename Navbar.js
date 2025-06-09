import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Головна</Link>
      <Link to="/about">Про нас</Link>
      <Link to="/contacts">Контакти</Link>
    </nav>
  );
}

export default Navbar;
