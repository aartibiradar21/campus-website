

import React from 'react';
import './donation.css';


function Donation() {
  return (
    <div className="donation-page">
      <div className="donation-header">
        <h1>Your Donation helps us transform underprivileged students into skilled coders</h1>
        <h5 className='don1'>Why is your donation important?</h5>
        <p>
        In a situation where young, underprivileged individuals face the prospect of early marriage, cyclic poverty, and restricted access to quality education, Your donation is more than a gift; 
        offering them an alternative path filled with opportunities. By supporting their education, you're helping them discover their social agency, develop volition, and become exemplary citizens who can 
        lead independent lives. Help us bridge the divide and create a nurturing environment where these young minds can flourish professionally and personally.
        </p>
      </div>

      <div className='main-column'>
      <div className='column'>
        <h5>Any amount donated to NavGurukul will be eligible for tax exemption under 80G.
        </h5>
      </div>
      <form className='main-form'>
        <div className='form-ckeck1'>
          <input className='pointer' type='radio'></input>
          <label className='bold-text'>Indian Citizen</label>
        </div>

        <div className='form-ckeck2'>
          <input className='pointer' type='radio'></input>
          <label className='bold-text'>Foreign Citizen</label>
        </div>
      </form>
      </div>
      
    </div>
  );
}

export default Donation;
