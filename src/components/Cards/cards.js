import React from 'react';
import './card.css'
const Card = ({information , image , details}) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="circular-image" src={image} alt="Profile" />
      </div>
      <div className="name-container">
        <p className='card__caption'>{information}</p>
        <p style={{marginTop:'3rem'}}>{details}</p>
      </div>
    </div>
  );
};

export default Card;