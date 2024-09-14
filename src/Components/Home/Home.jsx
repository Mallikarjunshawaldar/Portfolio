import React from 'react';
import './Home.css';
import { assets } from '../../assets/assets';

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="profile_container" id="profile_container">
      <div className="detaile_container">
        <p>hello, I'm</p>
        <h1>Mallikarjun</h1>
        <p className="homp">
          MERN Full Stack Developer <br /> UI & UX Designer
        </p>
        <a href={assets.resume} target="_blank" rel="noopener noreferrer">
          <button>Download CV</button>
        </a>
        <button onClick={scrollToContact}>Contact</button>
        <div className="socials-container">
          <img src={assets.github} alt="github image" className="icon" />
          <img src={assets.linkedin} alt="linked in image" className="icon" />
          <img src={assets.facebook} alt="facebook image" className="icon" />
        </div>
      </div>
      <div className="profil_pic">
        <img src={assets.Mallikarjun1} alt="profile-pic" className="profile-pic" />
      </div>
    </div>
  );
};

export default Home;
