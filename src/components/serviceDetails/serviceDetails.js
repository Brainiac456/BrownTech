import React from 'react';
import './serviceDetails.css';
import Details from './details';
import {MdFamilyRestroom} from 'react-icons/md'
import {FaSuitcaseRolling} from 'react-icons/fa'
const serviceDetails = ({ name, imageSrc }) => {
  return (
    <div className="my-component">
      <h2 className="name">{name}</h2>
      <img className="image" src={imageSrc} alt={name} />
      
      <div className='details'>
        <Details 
                  name="Adult"
                  number={4}
                  icon={<MdFamilyRestroom />}
                  />
         <Details 
                  name="Suitcases"
                  number={2}
                  icon={<FaSuitcaseRolling />}
                  />
          <Details 
                  name="Small cases"
                  number={2}
                  icon={<FaSuitcaseRolling />}
                  />

      </div>

    </div>
  );
};

export default serviceDetails;