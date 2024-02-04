import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the menu icon
import './Navbar.css';
import { userContext } from '../../context/Global'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const { handleSignOut,user } = useContext(userContext)

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
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/auth">Auth</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/hr">HR</Link></li>
          <li><Link to="/all-profiles">All Profiles</Link></li>
        </ul>
      </nav>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <ul className="nav-list">
          {user?<button onClick={handleSignOut} className='Sign-button'>Log Out</button> : <Link to='/auth  '>Sign In</Link>}
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
