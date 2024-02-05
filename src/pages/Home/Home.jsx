import React from 'react';
import { useContext,useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook,FaRobot } from 'react-icons/fa';
import { userContext } from '../../context/Global'
import './Home.css'; // Create a CSS file for styling
import ai from '../../assets/Images/Ai.jpg'
import expert from '../../assets/Images/Experts.jpg'
import growth from '../../assets/Images/Growth.jpg'
import { Link } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const { user } = useContext(userContext)
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className="home-container" data-aos='zoom-in'>
      <div className="hero-content" >
        <h1>Empower Your Career Quest with JobQuest</h1>
        <p>Welcome to JobQuest, your premier destination for navigating the job market with ease and precision...</p>
        <button className='startedBTN'>
          {user ?(<Link to='/search'>Get Started</Link>):(<Link to='/'>Get Started</Link>) }
          </button>
      </div>
      <div className="different">
        <h2>What makes us different?</h2>
        <div className="different-features">
          <div className="feature">
            <img src={ai} alt="Feature 1" data-aos='zoom-in'  data-aos-delay="500" />
            <p data-aos='zoom-in'  data-aos-delay="1000"  data-aos-offset="100">Advanced AI-powered job matching</p>
          </div>
          <div className="feature">
            <img src={expert} alt="Feature 2" data-aos='zoom-in'  data-aos-delay="1500" />
            <p data-aos='zoom-in'  data-aos-delay="2000"  data-aos-offset="100">Extensive network of industry experts</p>
          </div>
          <div className="feature">
            <img src={growth} alt="Feature 3" data-aos='zoom-in'  data-aos-delay="2500" />
            <p data-aos='zoom-in' data-aos-delay="3000"  data-aos-offset="100" >Personalized career growth recommendations</p>
          </div>
        </div>
      </div>
      <div className='contact-us'>
        <h2>Contact Us</h2>
        <div className='contact-links'>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
      {chatbotOpen && (
  <ChatBot className="Bot"
  
  steps={[
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you! What kind of job are you looking for?",
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "Great choice! What is your level of experience?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        { value: "entry", label: "Entry level", trigger: "7" },
        { value: "mid", label: "Mid-level", trigger: "7" },
        { value: "senior", label: "Senior level", trigger: "7" },
      ],
    },
    {
      id: "7",
      message: "Fantastic! What location are you targeting?",
      trigger: "8",
    },
    {
      id: "8",
      user: true,
      trigger: "9",
    },
    {
      id: "9",
      message: "Excellent choice! We will help you find job opportunities in {previousValue}. Please wait a moment.",
      end: true,
    },
  ]}
  />
)}
      <button className='botBTN' onClick={toggleChatbot}><FaRobot /></button>
      </div>
      <footer className="footer">
        <div>© {new Date().getFullYear()} JobQuest. All rights reserved.</div>
      </footer>
    </div>
  );
}
