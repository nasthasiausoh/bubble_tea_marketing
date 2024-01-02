import React, { useEffect, useState, useRef } from 'react';
import { Link, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import FunBanner from './FunBanner';
// import '../styles/FruitTeaProducts.css'

const FruitTeaProducts = ({productsData, cart, setCart, addToCart, removeFromCart, groupedProducts, specialDrinkRef, settings, currentSlide}) => {

 const fruitTeaCategory = 'Fruit Tea';

  return (
    <div className='product-page'>
      <FunBanner/>
      {groupedProducts[fruitTeaCategory] && (
        <div ref={fruitTeaCategory === 'Special Drink' ? specialDrinkRef : null}>
          <h3 className="title-options">{fruitTeaCategory} Options:</h3>

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