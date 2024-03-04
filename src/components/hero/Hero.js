// Hero.js
import React from 'react';
import './Hero.css'; // Import the CSS file
import hero_img from "./hero_img.PNG"; // Import the image

const Hero = () => {
    return (
        <div className="hero-sep">
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
                    </div>
                </div>
            </div>
            
            <div className="seperator"></div>
        </div>
    );
};

export default Hero;
