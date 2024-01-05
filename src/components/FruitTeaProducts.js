import React, { useEffect, useState, useRef } from 'react';
import { Link, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import FunBanner from './FunBanner';
import {trackProlongedBrowsing} from '../contexts/zetaTracking.js'
// import '../styles/FruitTeaProducts.css'

const FruitTeaProducts = ({productsData, cart, setCart, addToCart, removeFromCart, groupedProducts, specialDrinkRef, settings, currentSlide}) => {
 
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const endTime = Date.now();
      const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);

      // Track prolonged browsing for the Fruit Tea page (threshold set to 60 seconds)
      trackProlongedBrowsing('/fruit-tea', timeSpentInSeconds, 60);
    };
  }, []);

 const fruitTeaCategory = 'Fruit Tea';

  return (
    <div className='product-page'>
      <FunBanner/>

      <div className='hero-message'>
        <h2>Quality Bubble Tea Home Kits</h2>
        <p>Welcome to our menu, where we provide you with only the highest quality ingredients and the best recipes to create your own delicious bubble tea from the comfort of your own home!<br></br>Feel free to browse though our favourite selections and we hope you enjoy your TAPioca home kit!</p>
      </div>
      
      {groupedProducts[fruitTeaCategory] && (
        <div ref={fruitTeaCategory === 'Special Drink' ? specialDrinkRef : null}>
          <h3 className="title-options">{fruitTeaCategory} Home Kits</h3>

          <Slider {...settings} initialSlide={currentSlide === 0 ? currentSlide : 0}>
            {groupedProducts[fruitTeaCategory].map((product) => (
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
export default FruitTeaProducts