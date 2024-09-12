import React from 'react';
import { FaDna, FaHeartbeat, FaTablets, FaThermometer } from 'react-icons/fa';
import './FeaturesCards.css';

const FeaturesCards = () => {
  return (
    <div className='container my-5'>
      <div className="row d-flex gap-3 justify-content-center">
        <div className="features-card p-5 shadow">
          <FaHeartbeat size={40} className='custom-color mb-4' />
          <p className='fw-bold fs-5'>Lorem ipsum</p>
          <p className='custom-f-s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde!</p>
        </div>
        <div className="features-card p-5 shadow">
          <FaTablets size={40} className='custom-color mb-4' />
          <p className='fw-bold fs-5'>Lorem ipsum</p>
          <p className='custom-f-s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde!</p>
        </div>
        <div className="features-card p-5 shadow">
          <FaThermometer size={40} className='custom-color mb-4' />
          <p className='fw-bold fs-5'>Lorem ipsum</p>
          <p className='custom-f-s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde!</p>
        </div>
        <div className="features-card p-5 shadow">
          <FaDna size={40} className='custom-color mb-4' />
          <p className='fw-bold fs-5'>Lorem ipsum</p>
          <p className='custom-f-s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde!</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
