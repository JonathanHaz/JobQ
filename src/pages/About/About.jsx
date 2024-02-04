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
          <div className="card">
            <svg><path d=""></path></svg>
            <div className="card__content">
              <p className="card__title">Jonathan Hazan</p>
              <p className="card__description">
                Jonathan is a dedicated team member. He is passionate about mention Jonathan's passion.
                 In his free time, he enjoys playing video games or watching anime.
                  Feel free to connect with Jonathan.
              </p>
            </div>
          </div>
          <div className="card">
            <svg><path d=""></path></svg>
            <div className="card__content">
              <p className="card__title">Sunny Arbiv</p>
              <p className="card__description">
                Sunny Arbiv is a valuable member of our team.
                  Sunny's goal is to become a Full-Stack Developer.
                  In his free time, Sunny enjoys mention playing video games
                  Feel free to connect with Sunny.
              </p>
            </div>
          </div>
          <div className="card">
            <svg><path d=""></path></svg>
            <div className="card__content">
              <p className="card__title">Uriel Benagev</p>
              <p className="card__description">
                Uriel Benagev is a valued member of our team.
                 Uriel is dedicated to mention Uriel's dedication. In his free time,
                  Uriel enjoys mention Uriel's hobbies. Feel free to connect with Uriel.
              </p>
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
