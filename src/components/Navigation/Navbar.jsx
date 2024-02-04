import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the menu icon
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (

    <div>
      {/* Sidebar toggle icon */}
      <FaBars className="menu-icon" onClick={toggleSidebar} />

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="side-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <ul className="nav-list">
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/auth">Auth</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/hr">HR</Link></li>
          <li><Link to="/all-profiles">All Profiles</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
