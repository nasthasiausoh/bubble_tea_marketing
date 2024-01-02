import React from 'react';
import '../styles/Banner.css';
import funBubbleTeaImage from '../assets/funBubbleTeaImage.jpg';

const FunBanner = () => {
  return (
    <div className='banner'>
      <img src={funBubbleTeaImage} alt="Bubble Tea Banner" />
    </div>
  );
};

export default FunBanner;
