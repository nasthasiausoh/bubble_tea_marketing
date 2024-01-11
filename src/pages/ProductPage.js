import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import '../styles/ProductPage.css';
import { useNavigate } from 'react-router-dom';
import GeneralBanner from '../components/GeneralBanner';

const ProductPage = ({ productsData, addToCart, removeFromCart, cart, setCart }) => {

  return (
    <div className="product-page">

      {/* <div className='homepage-hero'>z */}
        <GeneralBanner/>
        {/* <p  id='tag-line'> Discover the world's best bubble tea drinks from the comfort of your home! </p>
      </div>  */}
      <h2 className="product-page-title">Our Bubble Tea Home Kit Options</h2>


      <div className='drink-category-options'>
        <div id='category-button-description'>
          <Link to='/milk-tea'><button id='bubble-tea-category-buttons'>MILK TEAS</button>
            </Link> 
            <p>Click above to view TAPioca's Classic Milk Bubble Teas. <br></br>Try one of our 2023 award winning home-kit recipe.</p>
        </div>

        <div id='category-button-description'>
          <Link to='/fruit-tea'><button id='bubble-tea-category-buttons'>FRUIT TEAS</button>
            </Link> 
            <p>Click above to view TAPioca's Fruity Bubble Teas. <br></br> Not a fan of dairy, alcohol or caffeine? Look no further!</p>
        </div>

        <div id='category-button-description'>
          <Link to='/signature-drinks'><button id='bubble-tea-category-buttons'>SIGNATURE DRINKS</button>
            </Link> 
            <p>Click above to see TAPioca's signature blends. <br></br> These will give you a Bubble Tea experience like no other!</p>   
          </div>
      </div>
    </div>
  );
};

export default ProductPage;

