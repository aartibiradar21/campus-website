import React from 'react';
import './campus-info.css'

const ImageGrid = () => {
  const campuses = [
    { name: 'Himachal', imgSrc: 'himachal.png' },
    { name: 'Kishanganj', imgSrc: 'Kishanganj_Bihar_Campus_.jpg' },
    { name: 'Udaipur', imgSrc: 'udaipur.png' },
    { name: 'Dantewada', imgSrc: 'dantewada.png' },
    { name: 'Raipur', imgSrc: 'raipur.png' },
    { name: 'Jashpur', imgSrc: 'jashpur.png' },
    { name: 'Dharmshala', imgSrc: 'dharmshala.png' },
    { name: 'Sarjapur', imgSrc: 'sarjapur.png' },
    { name: 'Bangalore', imgSrc: 'banglore.jpg' },
    { name: 'Pune', imgSrc: 'pune.jpg' }
  ];

  return (
    <div className="campuses">
      {campuses.map((campus, index) => (
        <div className="campus" key={index}>
          <img src={campus.imgSrc} alt={campus.name} />
          <p>{campus.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
