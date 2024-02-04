import React from 'react';
import './About.css'; // Create a CSS file for styling

export default function About() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About JobQuest</h1>
        <p>
          JobQuest is a revolutionary platform dedicated to helping individuals like you find their dream jobs and navigate the competitive job market effectively.
        </p>
        <p>
          Our mission is to empower job seekers with cutting-edge technology and expert guidance, making the job search process easier and more personalized.
        </p>
        <p>
          At JobQuest, we leverage advanced AI-powered job matching algorithms, connect you with a vast network of industry experts, and provide personalized career growth recommendations to help you succeed.
        </p>
        <p>
          Whether you are a recent graduate looking for your first job or a seasoned professional seeking new opportunities, JobQuest is here to assist you on your career journey.
        </p>
      </div>
      <div className='team'>
        <h1>Meet the Team</h1>
        <div className='teamCardContainer'>
    <div class="card">
        <svg><path d=""></path></svg>
        <div class="card__content">
        <p class="card__title">Jonathan Hazan</p>
        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    </div>
    <div class="card">
        <svg><path d=""></path></svg>
        <div class="card__content">
        <p class="card__title">Sunny Arbiv</p>
        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    </div>
    <div class="card">
        <svg><path d=""></path></svg>
        <div class="card__content">
        <p class="card__title">Uriel Benagev</p>
        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    </div>
 </div>
      </div>
      <footer className="footer">
        <div>© {new Date().getFullYear()} JobQuest. All rights reserved.</div>
      </footer>
    </div>
  );
}
