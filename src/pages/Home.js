import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    navigate('/products/special-drinks', { state: { fromBanner: true } });
  };

  return (
    <div>
      <img className='xmas-banner'
        src="https://previews.123rf.com/images/rusya8/rusya81712/rusya8171200022/91722777-christmas-sale-banner.jpg"
        alt="Christmas Sale Banner"
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={handleBannerClick} />

        <div className='homepage-title'>
          <h3>Discover a Delightful Variety of Bubble Tea Flavors at Home!</h3>
          <p> <i>Explore our menu and find your favorite!</i></p>
          <button>View our Products Here</button>
        </div>
      
    </div>
  );
};

export default Home;
