import React from 'react';
import './payment.css';

function Payment() {
  return (
    <div>
      <div className="donation-container">
        <div className="payment-gateway">
          <h2>Donate via Payment Gateway</h2>
          <div className="payment-options">
            <div className="donation-type">
              <span>Monthly</span> | <span>One Time</span>
            </div>
            <div className="donation-options">
                <div className='payment'>
                    <button className='bnt'>₹ 100</button>
                    <button className='bnt'>₹ 500</button>
                    <button className='bnt'>₹ 1000</button>
              </div>
              <div className='payment'>
                    <button className='bnt'>₹ 2500</button>
                    <button className='bnt'>₹ 5000</button>
                    <button className='bnt'>₹ 10000</button>
              </div>
            </div>
            <p className='note'>Please note: A 2% charge will be levied for using our payment gateway</p>
          </div>
        </div>

        <div className="bank-transfer">
          <h2>Donate via Bank Transfer</h2>
          <p><strong>UPI ID:</strong> navgurukulf@kotak</p>
          <p><strong>Name:</strong> Navgurukul Foundation for Social Welfare</p>
          <p><strong>Account Number:</strong> 0512251778</p>
          <p><strong>IFSC Code:</strong> KKBK0004260</p>
        </div>
      </div>

      <div className="contact">
        <h2>Are you a corporation and taken an interest in what we do?
        </h2>
        <button className="contact-btn">Contact Us for CSR Enquiries</button>
      </div>
    </div>
  )
}

export default Payment
