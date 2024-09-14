import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-container'>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
