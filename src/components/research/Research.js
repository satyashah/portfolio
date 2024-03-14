import React, { useState } from 'react';
import './Research.css';
import bsos_logo from "./bsos_logo.jpg"; // Import the image
import clark_logo from "./clark_logo.png"; // Import the image


const Research = () => {
    return (
        <div className = "research" id = "research">
            <div className="research_container">
                <h1 className="rea-title">Research</h1>
                <h3 className="rea-subtitle">Thanks to great professors and great colleagues</h3>
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
            <div className="rea-seperator"></div>
        </div>
    );
};

export default Research;