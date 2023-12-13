// import React, { useEffect, useState, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import Slider from 'react-slick';
// import Product from '../components/Product';
// import '../styles/ProductPage.css';
// import { useNavigate } from 'react-router-dom';

// const ProductPage = ({ productsData, addToCart, removeFromCart, cart, setCart }) => {
//   const location = useLocation();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const specialDrinkRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (location.state?.fromBanner) {
//       // Scroll to the special drink options after the component mounts
//       specialDrinkRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [location.state?.fromBanner]);

//   const groupedProducts = productsData.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//     }
//     acc[product.category].push(product);
//     return acc;
//   }, {});

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     afterChange: (current) => setCurrentSlide(current),
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   const handleBannerClick = () => {
//     navigate('/special-drinks', { state: { fromBanner: true } });
//   };

//   const CustomNextArrow = (props) => {
//     const { className, onClick } = props;
//     return <div className={className} onClick={onClick}><i className="fas fa-chevron-right"></i></div>;
//   };

//   const CustomPrevArrow = (props) => {
//     const { className, onClick } = props;
//     return <div className={className} onClick={onClick}><i className="fas fa-chevron-left"></i></div>;
//   };

//   return (
//     <div className="product-page">
//       <div>
//         <img
//           className="xmas-banner"
//           src="https://previews.123rf.com/images/rusya8/rusya81712/rusya8171200022/91722777-christmas-sale-banner.jpg"
//           alt="Christmas Sale Banner"
//           style={{ width: '100%', cursor: 'pointer' }}
//           onClick={handleBannerClick}
//         />

//         {/* <div className="homepage-title">
//           <p>
//             <i>Explore our menu and find your favorite!</i>
//           </p>
//         </div> */}
//       </div>

//       <h2 className="product-page-title">TAPioca's Product Page</h2>

//       {Object.keys(groupedProducts).map((category, index) => (
//         <div key={category} ref={category === 'Special Drink' ? specialDrinkRef : null}>
//           <h3 className="title-options">{category} Options:</h3>

//           <Slider {...settings} initialSlide={currentSlide === index ? currentSlide : 0}>
//             {groupedProducts[category].map((product) => (
//               <Product
//                 key={product.id}
//                 product={product}
//                 addToCart={addToCart}
//                 removeFromCart={removeFromCart}
//                 cart={cart}
//               />
//             ))}
//           </Slider>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../components/Product';
import '../styles/ProductPage.css';
import { useNavigate } from 'react-router-dom';

const ProductPage = ({ productsData, addToCart, removeFromCart, cart, setCart }) => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const specialDrinkRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.fromBanner) {
      // Scroll to the special drink options after the component mounts
      specialDrinkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state?.fromBanner]);

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}><i className="fas fa-chevron-right"></i></div>;
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}><i className="fas fa-chevron-left"></i></div>;
  };

  const groupedProducts = productsData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const handleBannerClick = () => {
    if (specialDrinkRef.current) {
      specialDrinkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="product-page">
  
      {/* <img className="xmas-banner"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/christmas-sale-special-promo-design-template-9062ed0d63d2d1b07223328c3a84a67f_screen.jpg?ts=1669596450"
        alt="Christmas Sale Banner"
        style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
        onClick={handleBannerClick}
      /> */}

      <h2 className="product-page-title">TAPioca's Product Page</h2>
      <p  id='tag-line'> <i> Discover the world's best bubble tea drinks from the comfort of your home! </i> </p>
      

      {Object.keys(groupedProducts).map((category, index) => (
        <div key={category} ref={category === 'Special Drink' ? specialDrinkRef : null}>
          <h3 className="title-options">{category} Options:</h3>

          <Slider {...settings} initialSlide={currentSlide === index ? currentSlide : 0}>
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
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
