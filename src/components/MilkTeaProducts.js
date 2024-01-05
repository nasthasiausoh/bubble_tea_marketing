import React, { useEffect, useState, useRef } from 'react';
import { Link, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import '../styles/MilkTeaProducts.css'
import MilkBanner from './MilkBanner';

import { trackPage, trackProlongedBrowsing } from '../contexts/zetaTracking';


const MilkTeaProducts = ({productsData, cart, setCart, addToCart, removeFromCart, groupedProducts, specialDrinkRef, settings, currentSlide}) => {

  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const endTime = Date.now();
      const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);

      // Track prolonged browsing for the Milk Tea page (threshold set to 60 seconds)
      trackProlongedBrowsing('/milk-tea', timeSpentInSeconds, 60);
    };
  }, []);


// for page_time_spent event but doesnt work properly:
// useEffect(() => {
//   const startTime = Date.now();

//   return () => {
//     const endTime = Date.now();
//     const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);

//     // Track the page time spent for the Milk Tea page
//     trackPage('/milk-tea', timeSpentInSeconds);
//   };
// }, []); // Run the effect only once when the component mounts


 const milkTeaCategory = 'Milk Tea';

  return (
    <div className='product-page'>
      <MilkBanner/>

      <div className='hero-message'>
        <h2>Quality Bubble Tea Home Kits</h2>
        <p>Welcome to our menu, where we provide you with only the highest quality ingredients and the best recipes to create your own delicious bubble tea from the comfort of your own home!<br></br>Feel free to browse though our favourite selections and we hope you enjoy your TAPioca home kit!</p>
      </div>

      {groupedProducts[milkTeaCategory] && (
        <div ref={milkTeaCategory === 'Special Drink' ? specialDrinkRef : null}>
          <h3 className="title-options">{milkTeaCategory} Home Kits</h3>

          <Slider {...settings} initialSlide={currentSlide === 0 ? currentSlide : 0}>
            {groupedProducts[milkTeaCategory].map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
export default MilkTeaProducts