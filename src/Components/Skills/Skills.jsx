import React from 'react';
import { assets } from '../../assets/assets.js';
import './Skills.css';

const Skills = () => {
  const images = [
    assets.css,
    assets.html,
    assets.javascript,
    assets.java,
    assets.nodejs,
    assets.mongodb,
    assets.mysql,
    assets.php,
    assets.python,
  ];

  // Number of times to repeat the images
  const repeatCount = 15;
  const repeatedImages = Array(repeatCount).fill(images).flat();

  return (
    <>
      <div className="skills-page" id='skills-page'>
        <h3 className='sp-h3'>Explore My</h3>
        <h1 className='sp-h1'>Skills</h1>
        <div className="skill-page-containers">
          <div className="skil-cont">
            <h1 className="bch1">Skills</h1>
            <hr />
            <div className="skills">
              <div className="front-cont">
                <h1>Frontend</h1>
                <h3>C, C++ Programming</h3>
                <h3>JAVA Programming</h3>
                <h3>JavaScript</h3>
                <h3>React JS</h3>
                <h3>HTML, CSS</h3>
                <h3>Python</h3>
              </div>
              <div className="front-cont">
                <h1>Backend</h1>
                <h3>DBMS</h3>
                <h3>MySQL</h3>
                <h3>MongoDB</h3>
                <h3>Data Structure</h3>
                <h3>Node JS</h3>
                <h3>PHP</h3>
                <h3>Express JS</h3>
              </div>
            </div>
            <div className='skils-icons-wrapper'>
              <div className="skils-icons">
                {repeatedImages.map((image, index) => (
                  <img key={index} src={image} alt={`skill-icon-${index}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="experience-container">
            <div className="introduction">
              <h1>Crafting Excellence in Full Stack Development</h1>
              <p>
                I specialize in MERN Full Stack Development, excelling in both frontend and backend technologies. My skills include building intuitive user interfaces and efficient backend systems using JavaScript, React, Python, and database management. I am passionate about creating high-quality, scalable solutions that drive innovation and excellence.
              </p>
            </div>
            <div className="experience">
              <h1 className="bch1">Experience</h1>
              <hr />
              <div className="expe-cont">
                <div className="title">
                  <h1>CodeTech IT Solution</h1>
                  <h3 className='year'>2024</h3>
                </div>
                <h3>MERN Full Stack Developer</h3>
                <p>I had contributed in full stack Developing.</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
