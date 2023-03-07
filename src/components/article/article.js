import React from "react";
import './article.css'
const MyComponent = ({ imageSrc, name, description }) => {
    return (
        <div className="my-article">
          <img src={imageSrc} alt={name} className="my-article-image" />
         <div style={{display:'flex'}}>
          <p>by : admin</p>
          <p style={{marginLeft:'2rem'}}>Category : driving</p>
          <p style={{marginLeft:'6rem' , color:'#F12797'}}>11/11/23</p>
          </div>
          <div className="my-article-text">
            <h2 className="my-article-name">{name}</h2>
            <p className="my-article-description">{description}</p>
          </div>
        </div>
      );
};

export default MyComponent;