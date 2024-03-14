// Hero.js
import React from 'react';
import './Hero.css'; // Import the CSS file
import hero_img from "./hero_img.PNG"; // Import the image
import git_dk from "./git_dk.png"; // Import the image
import in_dk from "./in_dk.png"; // Import the image
import mail_dk from "./mail_dk.png"; // Import the image
import md_dk from "./md_dk.png"; // Import the image

const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Hero = () => {
    return (
        <div id = "hero">
            <div className="hero">
                <div className="hero-image">
                </div>
                <div className="hero-text">
                    <h1 className="hero-title">Satya Shah</h1>
                    <div className="hero-subtitle">
                        <span>
                            <p>Software Engineer</p>
                            <p>Machine Learning // Full Stack</p>
                        </span>
                        <button className="button" onClick={() => scrollToSection('#projects')}>Go To Projects</button>
                    </div>

                    <div className="icon-grid2">
                        <a href="link1"><div className="icon" style={{backgroundImage: `url(${git_dk})`}}></div></a>
                        <a href="link2"><div className="icon" style={{backgroundImage: `url(${mail_dk})`}}></div></a>
                        <a href="link3"><div className="icon" style={{backgroundImage: `url(${in_dk})`}}></div></a>
                        <a href="link4"><div className="icon" style={{backgroundImage: `url(${md_dk})`}}></div></a>
                    </div>
                </div>
                
            </div>
            
            <div className="seperator">
                <div className="icon-grid">
                    <a href="link1"><div className="icon" style={{backgroundImage: `url(${git_dk})`}}></div></a>
                    <a href="link2"><div className="icon" style={{backgroundImage: `url(${mail_dk})`}}></div></a>
                    <a href="link3"><div className="icon" style={{backgroundImage: `url(${in_dk})`}}></div></a>
                    <a href="link4"><div className="icon" style={{backgroundImage: `url(${md_dk})`}}></div></a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
