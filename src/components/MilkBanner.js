import React from 'react';
import '../styles/Banner.css';
import milkBannerImage from '../assets/milkBannerImage.jpg';

const MilkBanner = () => {
  return (
    <div className='banner'>
      <img src={milkBannerImage} alt="Bubble Tea Banner" />
    </div>
  );
};

export default MilkBanner;
