// pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import '../styles/ProductPage.css'; // Import your CSS file

const ProductPage = ({ productsData, addToCart, removeFromCart, cart, setCart }) => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const groupedProducts = productsData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  useEffect(() => {
    if (location.state?.fromBanner) {
      const specialDrinksSection = document.getElementById('specialDrinksSection');
      if (specialDrinksSection) {
        specialDrinksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state?.fromBanner]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three products at a time
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="product-page">
      
      <h2 className='product-page-title'>TAPioca's Product Page</h2>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h3 className='title-options'>{category} Options:</h3>

          <Slider {...settings}>
            {groupedProducts[category].map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            ))}
          </Slider>
          {/* <p>
            Showing products {currentSlide * 3 + 1} to {Math.min((currentSlide + 1) * 3, groupedProducts[category].length)} of{' '}
            {groupedProducts[category].length}
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
