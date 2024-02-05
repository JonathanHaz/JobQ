import React, { useEffect, useRef } from 'react';
import './About.css'; // Create a CSS file for styling
import { gsap } from 'gsap';

export default function About() {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section) => {
      const tl = gsap.timeline({ defaults: { duration: 2 } });
      const sectionP = section.querySelector('p');
      const sectionH1 = section.querySelector('h1');
      const sectionFree = section.querySelector('.free'); // Select the "Feel free" element

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.fromTo(
              section,
              { opacity: 0, x: section.classList.contains('sunny') || section.classList.contains('jonathan') ? -300 : 200 }, // Initial state
              { opacity: 1, x: 0, ease: 'power3.out' } // Final state
            );

            // Animate each letter in the h1 one by one
            tl.from(sectionH1, { opacity: 0, stagger: 0.1, duration: 1 }, '-=0.5');
            
            // Fade in the paragraph
            tl.from(sectionP, { opacity: 0 }, '-=0.5');

            // Fade in the "Feel free" text
            tl.from(sectionFree, { opacity: 0 }, '-=0.5');
            
            // Remove the observer for this section after it has been animated
            observer.unobserve(section);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(section);
    });
  }, []);

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
      <div className="sections">
        <div className="section sunny" ref={(el) => (sections.current[0] = el)}>
          <h1>Sunny Arbiv</h1>
          <p>
            Sunny Arbiv is a valuable member of our team. Sunny's goal is to become a Full-Stack Developer. In his free time, Sunny enjoys playing video games.
          </p>
          <p className='free'>Feel free to connect with Sunny.</p>
        </div>
        <div className="section uriel" ref={(el) => (sections.current[1] = el)}>
          <h1>Uriel Benagev</h1>
          <p>
            Uriel Benagev is a valued member of our team. Uriel is dedicated to the Torah. In his free time, Uriel enjoys reading books and listening to music.
          </p>
          <p className='free'>Feel free to connect with Uriel.</p>
        </div>
        <div className="section jonathan" ref={(el) => (sections.current[2] = el)}>
          <h1>Jonathan Hazan</h1>
          <p>
            Jonathan is a dedicated team member. He is passionate about mention Jonathan's passion. In his free time, he enjoys playing video games or watching anime.
          </p>
          <p className='free'>Feel free to connect with Jonathan.</p>
        </div>
      </div>
      <footer className="footer">
        <div>© {new Date().getFullYear()} JobQuest. All rights reserved.</div>
      </footer>
    </div>
  );
}
