import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about-container' id='about-container'>
      <div className="content-wrapper">
        <div className="detail-container">
          <div className='head-title'>
            <p>get to know more</p>
            <h1>About Me</h1>
            <div className="personal">
                <div className="personal-details-1">    
                    <h4>Date of Birth : 08-SEP-2000</h4>
                    <h4>Nationality : INDIA</h4>
                    <h4>Phone : 8073452834</h4>
                    <h4>Email : ssmallikarjunsh@gmail.com</h4>
                    <h4>Address : 139/B, plot no - 7, Shakambari Nagar, behind KMF Dharwad, 580004, Karnataka</h4>
                    
                </div>
                <div className="personal-details-2">
                        <h2>Languages</h2>
                        <hr />
                        <h4>English</h4>
                        <h4>Kannada</h4>
                        <h4>Hindi</h4>
                </div>
            </div>
            <p className='htp'>Seeking a challengeing position in field where i can utilize my skills to contribute to the success of the company. to secure a full stack web developer role in a dynamic company that offers oppertunities for professional growth and advancement. <br /> <br />I can contribute to the best of my skills, talent and hard work for the growth of organisation and myself. I have ability to adjust to with all the situation and i will do all my best in the all field and will bring success to organisation and career of myself.</p>
          </div>
        </div>

        <div className='education-container'>
          <h1 className='bch1'>Education</h1>
          <hr />
          <div className='edu-cont'>
            <div className='title'>
              <h1>Masters of Computer Application</h1>
              <h3 className='eduh3'>2024</h3>
            </div>
            <p>Dayanada Sagar College of Arts, Science and Commerce</p>
            <h3>83 %</h3>
          </div>
          <div className='edu-cont'>
            <div className='title'>
              <h1>Bachelor of Computer Application</h1>
              <h3 className='eduh3'>2022</h3>
            </div>
            <p>KLE's P C Jobin Science College Hubli</p>
            <h3>79 %</h3>
          </div>
          <div className='edu-cont'>
            <div className='title'>
              <h1>XII</h1>
              <h3 className='eduh3'>2019</h3>
            </div>
            <p>Jawahara Navodaya Vidyalaya Koppal</p>
            <h3>64 %</h3>
          </div>
          <div className='edu-cont'>
            <div className='title'>
              <h1>X</h1>
              <h3 className='eduh3'>2017</h3>
            </div>
            <p>Jawahara Navodaya Vidyalaya Bagalkote</p>
            <h3>70 %</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
