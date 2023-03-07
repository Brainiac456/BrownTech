import React from 'react';
import './review2.css'
const review2 = ({ image, name, rating, description }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
  
    return (
        <div className="card2">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <div className="rating2">
            <span className="star2">&#9733;</span>
            <span className="star2">&#9733;</span>
            <span className="star2">&#9733;</span>
            <span className="star2">&#9733;</span>
            <span className="star2">&#9734;</span>
            <span>{rating} stars</span>
          </div>
          <p>{description}</p>
        </div>
      );
};

export default review2;