import React from 'react';
import '../style/card.css';

const Card = ({ image, animate }) => {
  return (
    <div className={`card-width card-height card-container ${animate ? 'fade-in' : ''}`}>
      <img src={image} alt="" /> 
    </div>
  );
};

export { Card };
