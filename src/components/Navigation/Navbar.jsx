import React, { useContext, useState, } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { userContext } from "../../context/Global";
import Logo from '../../assets/Images/Logo.png'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { handleSignOut, user, username ,isHr} = useContext(userContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>

     

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="side-list">
          {user?
          <>      
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li> 
          <li><Link to="/search">Search Jobs</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {isHr?<li><Link to="/hr">HR</Link></li>:null}
          <li><Link to="/favorites">Favorites</Link></li>
          </>
          :
          <>
          <li><Link to="/home">Home</Link></li>
          </>
          }

        </ul>
      </nav>

      {/* Main Navbar */}
      <div className={`navbar`}>
      <nav className="main-navbar">
        <ul className="nav-list">
      <FaBars className="menu-icon" onClick={toggleSidebar} />
          
          <img className="logo" src={Logo} alt="" />
          {user ? (
            <><h3 className="welcome">Welcome back, {username}</h3>
            <button onClick={handleSignOut} className="logoutBTN">Log Out</button>
              </>
          ) : (
            <button className='loginBTN'><Link to='/auth'>Sign In</Link></button>
          )}
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;

