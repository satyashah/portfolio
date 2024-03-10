import React from 'react';
import './Education.css'; // Import the CSS file

function Education() {
    return (
        <div id ="education" className='education'>
            <div className='education_container'>
                <div className="edu-text ">
                    <h1 className="edu-title">University of<br className="break" /> Maryland</h1>
                    <div className="edu-subtitle">
                        <span>
                            <p>College Park, GPA: 4.0</p>
                            <p>Dean's List & 2 Department Honors</p>
                        </span>
                    </div>
                </div>
                <div className="edu_image"></div>
            </div>

            <div className="edu2-text">
                <div className="box">
                    <span><u>B.S.</u><br className="break" /> Computer Science <br></br>[2022-2026]</span>
                </div>
                <div className="separator"></div>
                <div className="box">
                    <span><u>B.S.</u><br className="break" /> Bioengineering <br></br>[2022-2026]</span>
                </div>
                <div className="separator"></div>
                <div className="box bottom-bord">
                    <span><u>Masters</u><br className="break" /> Computer Science <br></br>[2025-2026]</span>
                </div>
            </div>

            <div className="page_seperator">
            </div>
        </div>
    );
}

export default Education;