import React from 'react';
import './SubNav.css';
import { assets } from '../../assets/assets';

const SubNav = () => {
  return (
    <div className='subnav' id='subnav'>
        <div className="subnav-container">
        <ul className="subnav-links">
           <li><img src={assets.home} alt="home-icon" /></li>
           <li><img src={assets.about} alt="about-icon" /></li>
           <li><img src={assets.skills} alt="skills-icon" /></li>
           <li><img src={assets.project} alt="project-icon" /></li>
           <li><img src={assets.contact} alt="conatact-icon" /></li>
        </ul>
        </div>
    </div>
  );
}

export default SubNav;
