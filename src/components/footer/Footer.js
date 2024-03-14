import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Satya Shah</p>
          <p>sshah132@terpmail.umd.edu</p>
          <p><a href="https://www.linkedin.com/in/satya-shah/">LinkedIn</a></p>
          <p><a href="https://github.com/satyashah">GitHub</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
