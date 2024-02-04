import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../context/Global'
import './Home.css'; // Create a CSS file for styling
import ai from '../../assets/Images/Ai.jpg'
import expert from '../../assets/Images/Experts.jpg'
import growth from '../../assets/Images/Growth.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
  const { user } = useContext(userContext)
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Empower Your Career Quest with JobQuest</h1>
        <p>Welcome to JobQuest, your premier destination for navigating the job market with ease and precision...</p>
        <button>
          {user ?(<Link to='/search'>Get Started</Link>):(<Link to='/'>Get Started</Link>) }
          </button>
      </div>
      <div className="different">
        <h2>What makes us different</h2>
        <div className="different-features">
          <div className="feature">
            <img src={ai} alt="Feature 1" />
            <p>Advanced AI-powered job matching</p>
          </div>
          <div className="feature">
            <img src={expert} alt="Feature 2" />
            <p>Extensive network of industry experts</p>
          </div>
          <div className="feature">
            <img src={growth} alt="Feature 3" />
            <p>Personalized career growth recommendations</p>
          </div>
        </div>
      </div>
      <div className='contact-us'>
        <h2>Contact Us</h2>
        <a href="">Github</a>
        <a href="">LinkedIn</a>
        <a href="">Facebook</a>
      </div>
      <footer className="footer">
        <div>© {new Date().getFullYear()} JobQuest. All rights reserved.</div>
      </footer>
    </div>
  );
}
