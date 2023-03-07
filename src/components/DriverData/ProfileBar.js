import React from 'react';
import './ProfileBar.css'
import {FiMapPin} from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
const ProfileBar = ({ imageSrc, name, age, location }) => {
  return (
    <div className="profile-data-rectangle-bar">
      <div className="user-image">
        <img src={'./man.png'} width='50px' />
      </div>
      <div className="user-data">
        <div className="nam">Jhon doe</div>
        <div className="age"><FiMapPin/> 2mins</div>
        <div className="location"><AiFillStar/>4.6</div>
        
      </div>
      <img src ={'./Car.png'} width='50px' />
    </div>
  );
};

export default ProfileBar;