import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/auth">Auth</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/hr">HR</Link></li>
        <li><Link to="/all-profiles">All Profiles</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
