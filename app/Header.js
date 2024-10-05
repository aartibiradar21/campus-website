"use client";
import React, { useState } from 'react';

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    aboutUs: false,
    school: false,
    digitalInitiatives: false,
    getInvolved: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="/navgurukul-logo.png" alt="Logo" />
      </div>


      <div className='header-items'>
        <div className='header-menu'>
          <div className='aboutus'>
            About Us
            <span onClick={() => toggleDropdown('aboutUs')} className='dropdown-toggle'>
              ▼
            </span>
            <div className={`dropdown ${dropdowns.aboutUs ? 'show' : ''}`}>
              <a href='#'>Who we are</a>
              <a href='#'>Our Team</a>
              <a href='#'>Blog</a>
            </div>
          </div>
          <div className='school'>
            School
            <span onClick={() => toggleDropdown('school')} className='dropdown-toggle'>
              ▼
            </span>
            <div className={`dropdown ${dropdowns.school ? 'show' : ''}`}>
              <a href='#'>School of Programming</a>
              <a href='#'>School of Design</a>
              <a href='#'>School of Business</a>
              <a href='#'>School of Finance</a>
            </div>
          </div>

          <div className='digital-initiatives'>
            Digital Initiatives
            <span onClick={() => toggleDropdown('digitalInitiatives')} className='dropdown-toggle'>
              ▼
            </span>
            <div className={`dropdown ${dropdowns.digitalInitiatives ? 'show' : ''}`}>
              <a href='#'>Zuvy</a>
              <a href='#'>Meraki</a>
              <a href='#'>Code India Fellowship</a>
            </div>
          </div>

          <div className='get-involved'>
            Get Involved
            <span onClick={() => toggleDropdown('getInvolved')} className='dropdown-toggle'>
              ▼
            </span>
            <div className={`dropdown ${dropdowns.getInvolved ? 'show' : ''}`}>
              <a href='#'>Partner with us</a>
              <a href='#'>Careers</a>
            </div>
          </div>
        </div>

        <div className='info-cloumn'>
          <div className='hire'>
            <a href="./Information">
              <button className='hire-button'>Hire from Us</button>
            </a>
          </div>
          <div className='enquiries'>CSR Enquiries</div>
          <div className='donate'>
            <a href="./Information">
              <button className='donate-button'>Donate</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
