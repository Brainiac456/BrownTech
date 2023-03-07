import React from "react";
import "./historyData.css"; // import the CSS file for styling

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name}  width='150px' height='150px'/>
      <div className="card-details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;