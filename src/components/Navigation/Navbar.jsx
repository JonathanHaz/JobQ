<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext, useState } from 'react';
=======
import React, { useState,useContext } from 'react';
>>>>>>> 8aad1465d3901424feff6d6f780e3fec9b0a0510
=======
import React, { useContext, useState } from 'react';
import React, { useState,useContext } from 'react';
>>>>>>> 6986fadd62764ffda15a2b4d131bef1ed40e8e24
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
          {user?
          <>  
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/hr">HR</Link></li>
          <li><Link to="/all-profiles">All Profiles</Link></li> 
          </>
          :
          <>
          <li><Link to="/">Auth</Link></li>
          <li><Link to="/home">Home</Link></li>
          </>
          }
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
