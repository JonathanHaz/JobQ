import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { userContext } from '../../context/Global';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Destructure `user` and `username` from the context
  const { handleSignOut, user, username } = useContext(userContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <FaBars className="menu-icon" onClick={toggleSidebar} />

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="side-list">
          {user ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/hr">HR</Link></li>
              <li><Link to="/all-profiles">All Profiles</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/">Auth</Link></li>
              <li><Link to="/home">Home</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <ul className="nav-list">
          {user ? (
            <>
              <h1>Hello, {username}</h1>
              <button onClick={handleSignOut} className='Sign-button'>Log Out</button>
            </>
          ) : (
            <button className='loginBTN'><Link to='/auth'>Sign In</Link></button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

