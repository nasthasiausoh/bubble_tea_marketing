import React, { useEffect, useState, useRef } from 'react';
import { Link, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import GeneralBanner from './GeneralBanner';

const SpecialDrinksProducts = ({ productsData, cart, setCart, addToCart, removeFromCart, groupedProducts, specialDrinkRef, settings, currentSlide }) => {

    const specialDrinksProductsCategory = 'Signature Drink';
  
    const specialDrinksProducts = groupedProducts[specialDrinksProductsCategory];
  
    return (
      <div className='product-page'>
        <GeneralBanner/>

        {specialDrinksProducts && (
          <div ref={specialDrinkRef}>
            <h3 className="title-options">{specialDrinksProductsCategory} Options:</h3>
  
            <Slider {...settings} initialSlide={currentSlide === 0 ? currentSlide : 0}>
              {specialDrinksProducts.map((product) => (
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
  
  export default SpecialDrinksProducts;