import React from 'react';


const Header = () => {
  return (
   
        <div className="header">
            <div className='logo'>
            <img  src="/navgurukul-logo.png" alt="Logo1" /></div>
            <div className='header-items'>
                <div className='header-menu'>
            <div className='aboutus'>About Us</div>
            <div className='school'>School</div>
            <div className='digital-initiatives'>Digital-Initiatives'</div>
            <div className='get-involved'>Get Involved</div>
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

{/* <div className="start-button-container">
<a href="/Question">
  <button className="start-button">Let's Start</button>
</a>
</div> */}