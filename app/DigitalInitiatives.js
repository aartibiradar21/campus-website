import React from 'react';
import './DigitalInitiatives.css';

const DigitalInitiatives = () => {
  const initiatives = [
    {
      name: 'Zuvy',
      description: 'Get started on tech education with affordable degree programs',
      imgSrc: 'zuvy.png', 
      link: 'https://zuvy.example.com'
    },
    {
      name: 'Meraki',
      description: 'Get started with programming in Python, English, and Typing at the comfort of your home and for free',
      imgSrc: 'meraki.png',
      link: 'https://meraki.example.com'
    },
    {
      name: 'Code India Fellowship',
      description: 'Nurture programming skills in the next generation of India’s youth with your expertise',
      imgSrc: 'if.png',
      link: 'https://codeindia.example.com'
    }
  ];

  return (
    <div className="initiatives-container">
      <h2>Digital Initiatives</h2>
      <div className="initiatives-grid">
        {initiatives.map((initiative, index) => (
          <div className="initiative-card" key={index}>
            <img src={initiative.imgSrc} alt={initiative.name} className="initiative-logo" />
            <h3>{initiative.name}</h3>
            <p>{initiative.description}</p>
            <a href={initiative.link} target="_blank" rel="noopener noreferrer">
              Visit Website <span className="external-link-icon">🔗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalInitiatives;
