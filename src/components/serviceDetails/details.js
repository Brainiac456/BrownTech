import React from 'react';
import './details.css'
const details = ({ name, number,icon }) => {
    return (
        <div className="ImageWithDetails">
          {icon && <div className="icon">{icon}</div>}
          <div className="img__details">
            <div className="NA">{name}</div>
            <div className="nu">{number}</div>
          </div>
        </div>
      );
};

export default details;