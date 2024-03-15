import React from 'react';
import './Experience.css';
import medtronic_logo from "./medtronic_logo.png"; // Import the image
import raytheon_logo from "./raytheon_logo.png"; // Import the image
import umd_logo from "./umd_logo.png"; // Import the image

const Experience = () => {
    return (
        <div id="experience" className="experience_container">
            <h1 className="exp-title">Experience</h1>
            <h3 className="exp-subtitle">Building a Better Future Through Technology</h3>
            <div className="exp-text">
                <div className="exp-box">
                    <div className="exp-logo" style={{backgroundImage: `url(${medtronic_logo})`}}>
                    </div>
                    <div className="grid-container">
                        <div className="row">
                            <div className="left-aligned"><b>Software Engineering Intern</b></div>
                            <div className="left-aligned">Medtronic</div>
                        </div>
                        <div className="row">
                            <div className="right-aligned">June - Aug 2024</div>
                            <div className="right-aligned">Los Angeles, CA</div>
                        </div>
                    </div>
                </div>
                <div className="exp-box">
                    <div className="exp-logo" style={{backgroundImage: `url(${raytheon_logo})`}}>
                    </div>
                    <div className="grid-container">
                        <div className="row">
                            <div className="left-aligned"><b>Machine Learning Intern</b></div>
                            <div className="left-aligned">Raytheon</div>
                        </div>
                        <div className="row">
                            <div className="right-aligned">June - Aug 2023</div>
                            <div className="right-aligned">Arlington, VA</div>
                        </div>
                        <div className='expanded_text row'>
                            <ul>
                                <li>
                                    Developed an AI model which can predict general commodity prices using automotive data, current news developments, and equity prices to return a change in price over multiple time periods [<a className='cleanLink' href="https://github.com/satyashah/Automotive-Prediction-Models"><u><i>GitHub</i></u></a>]
                                </li>
                                <li>
                                    Developed a multitude of Machine Learning Models (Neural Networks, KNN, Random Forest, SVM's) achieving best mean absolute percent error of 5.86%
                                </li>
                                <li>
                                    Leveraged AWS cloud services, such as EC2, to deploy a scalable and efficient application for public usage of model.
                                </li>
                                <li>
                                    Spoke at 2 college conferences and won the Chesapeake Bay Statistics Award for work in data science and engineering.
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
                <div className="exp-box exp-bottom-bord">
                    <div className="exp-logo" style={{backgroundImage: `url(${umd_logo})`}}>
                    </div>
                    <div className="grid-container">
                        <div className="row">
                            <div className="left-aligned"><b>Navigation Software Engineer</b></div>
                            <div className="left-aligned">Maryland Autonomous Robotics</div>
                        </div>
                        <div className="row">
                            <div className="right-aligned">June - Aug 2023</div>
                            <div className="right-aligned">College Park, MD</div>
                        </div>
                        <div className='row expanded_text'>
                            <ul>
                                <li>
                                    Led computer vision team to improve navigation and object recognition capabilities of autonomous robots. [<a className='cleanLink' href="https://github.com/satyashah/Autonomous-On-Terrain-Vehicle/tree/main"><u><i>GitHub</i></u></a>]
                                </li>
                                <li>
                                    Implemented a backend architecture using REST APIs with caching to connect robots to our servers to send and receive data.
                                </li>
                                <li>
                                    Enhanced algorithms in C/C++ to run efficiently on embedded systems, shortening processing times by 24ms (18%).
                                </li>
                                <li>
                                Developed products that are used in space exploration, vehicles, and medicine sponsored by Raytheon, Nasa, and Bayer.
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
