import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/bannerImage.jpg';

const GeneralBanner = () => {
  return (
    <div className='banner'>
      <img src={bannerImage} alt="Bubble Tea Banner" />
    </div>
  );
};

export default GeneralBanner;
