import React from 'react';
import './reviewCard.css'
const reviewCard = ({ name, rating, review }) => {
  // Create an array of stars based on the rating
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="star">&#9733;</span>);
  }

  return (
    <div className="review-card">
      <div className="stars">{stars}</div>
      <h3>{name}</h3>
      <p>{review}</p>
      <p style={{marginTop:'2rem' , fontWeight:'bold' , color:'#F15BB5'}}>Marry jane</p>
      <p style={{marginTop:'0rem'}}>44 hours ago</p>


    </div>
  );
};

export default reviewCard;