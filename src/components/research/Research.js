import React, { useState } from 'react';
import './Research.css';
import bsos_logo from "./bsos_logo.jpg"; // Import the image
import clark_logo from "./clark_logo.png"; // Import the image


const Research = () => {
    return (
        <div id="research" className="research_container">
            <h1 className="rea-title">Research</h1>
            <h3 className="rea-subtitle">Thanks to great professors and great colleges</h3>
            <div className="rea-text">
                <div className="rea-box">
                    <div className='inner-rea-box'>
                        <div className="rea-logo" style={{backgroundImage: `url(${bsos_logo})`}}>
                        </div>
                        <div>
                            <div className="rea-left-aligned"><b>Software Application Developer</b></div>
                            <div className="rea-left-aligned">Dr. Robert J. Dooling</div>
                            <div className="rea-left-aligned">Jan 2024 - Present</div>
                        </div>
                    </div>
                    <div className='reaanded_text'>
                        <p>Project <a className='cleanLink' href="https://github.com/satyashah/Bird_Monitoring/tree/main"><u><i>Repository</i></u></a></p>
                        <p>Contributed <a className='cleanLink' href="https://scholar.google.com/citations?user=KOLkvAwAAAAJ&hl=en"><u><i>Publications</i></u></a> (Next Expected Oct 2024)</p>
                        <ul>
                            <li>
                                Developed automated testing and tracking platforms using Python and Computer Vision technologies for bird movement tracking in psychoacoustic studies [GitHub, Publication (Expected Dec 2024)].
                            </li>
                            <li>
                                Utilized advanced Signal Processing techniques to quantify fluctuations in diverse bird songs and harmonies.
                            </li>
                            <li>
                                Utilized technologies such as OpenCV, pandas, NumPy, SciPy, and TensorFlow for robust data analysis and SQL for storage.
                            </li>
                            <li>
                                Increased testing rate from to 1000 birds/day (300% increase), saving $300 daily in lab costs.
                            </li>
                        </ul>    
                    </div>
                </div>





                <div className="rea-box rea-bottom-bord">
                    <div className='inner-rea-box'>
                        <div className="rea-logo" style={{backgroundImage: `url(${clark_logo})`}}>
                        </div>
                        <div>
                            <div className="rea-left-aligned"><b>Machine Learning Researcher</b></div>
                            <div className="rea-left-aligned">Dr. Po-Yen Chen</div>
                            <div className="rea-left-aligned">May 2023 - Present</div>
                        </div>
                    </div>
                    <div className='reaanded_text'>
                        <p>Contributed <a className='cleanLink' href="https://scholar.google.com/citations?hl=en&user=rl6g8rIAAAAJ"><u><i>Publications</i></u></a> (Next Expected Apr 2024)</p>
                        <ul>
                            <li>
                                Developed machine learning models to accelerate development of nanomaterial assembly.
                            </li>
                            <li>
                                Collaborated with graduate researchers to develop support vector machines, active learning loops, and data augmentation.
                            </li>
                            <li>
                                Improved training speed by 30% through dimensionality reduction and code refactoring leading to earlier publication dates.
                            </li>
                            <li>
                                Maintained comprehensive documentation of all methodologies, processes, and results for Dr. Chen’s review and feedback.
                            </li>
                            <li>
                                Biweekly findings presentations to professor and graduate researchers, presented for the Maryland Nanotechnology Board.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;



/*
    return (
        <div id="research" className="research_container">
            <h1 className="rea-title">reaerience</h1>
            <h3 className="rea-subtitle">Building a Better Future Through Technology</h3>
            <div className="rea-text">
                <div className="rea-box">
                    <div className="rea-logo" style={{backgroundImage: `url(${raytheon_logo})`}}>
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
                        <div className='reaanded_text row'>
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
                <div className="rea-box rea-bottom-bord">
                    <div className="rea-logo" style={{backgroundImage: `url(${umd_logo})`}}>
                    </div>
                    <div className="rea-grid-container">
                        <div className="row">
                            <div className="left-aligned"><b>Navigation Software Engineer</b></div>
                            <div className="left-aligned">Maryland Autonomous Robotics</div>
                        </div>
                        <div className="row">
                            <div className="right-aligned">June - Aug 2023</div>
                            <div className="right-aligned">College Park, MD</div>
                        </div>
                        <div className='row reaanded_text'>
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
                                Developed products that are used in space realoration, vehicles, and medicine sponsored by Raytheon, Nasa, and Bayer.
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
*/