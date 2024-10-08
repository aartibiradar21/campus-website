import React from 'react';
import './content.css'

const Content= () => {
  return (
    <>
    <div className='column'>
        <div className='column2'>
        <img className='img1' src='logo1.svg'></img>
        <img className='img2' src='logo2.svg'></img>
        <div className='text'>

            Eternal University’s Fully-Funded BCA Program for Aspiring Young Women 2024-27
        </div>
        </div>
        <div className='date'>
            Apply by 11th september 2024
        </div>
    
    </div>
    <div className='info'>
            <div className="title">
                <span className="bold-text">The Gurukul for the</span> 
                <span className="highlight">New Age India</span> 
                <span className="bold-text">and</span>
                <span className="bold-text second-line">its New Generation</span>
            </div>
            <p className="description">We are a non-profit dedicated to bringing affordable tech education to<br></br> underprivileged girls in India.</p>
            </div>

            <h3>Our School</h3>
            <div className='courses'>
            <div className="course-item">
                <img className='course1' src='course1.svg' alt="School of Programming" />
                <p>School of Programming</p>
                <p>Fully-funded course in sofware
                    engineering with guarnteed jobs
                </p>
            </div>

            <div className="course-item">
                <img className='course2' src='course2.svg' alt="School of Design" />
                <p>School of Design</p>
                <p>Fully-funded course in sofware
                    engineering with guarnteed jobs
                </p>
            </div>
            </div>

            <div className='school-course'>
                <div className='school-item'>
            <img className='course3' src='course3.jpg' alt="School of Business" />
            <p>School of Business</p>
            <p>Fully-funded course in sofware
                    engineering with guarnteed jobs
                </p>
            </div>
            <div className='school-item'>
            <img className='course4' src='course4.png' alt="School of Finance" />
           <p> School of Finance</p>
            <p>Fully-funded course in sofware
                    engineering with guarnteed jobs
                </p>
            </div>
            </div>
    </>
  );
};

export default Content;
