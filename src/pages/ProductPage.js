// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Product from '../components/Product';

// const ProductPage = ({ productsData, addToCart, removeFromCart, cart, setCart }) => {
//   const location = useLocation();

//   // Grouping products by category:
//   const groupedProducts = productsData.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//     }
//     acc[product.category].push(product);
//     return acc;
//   }, {});

//   // Scroll to the Special Drinks section after the component mounts
//   useEffect(() => {
//     if (location.state?.fromBanner) {
//       const specialDrinksSection = document.getElementById('specialDrinksSection');
//       if (specialDrinksSection) {
//         specialDrinksSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location.state?.fromBanner]);

// return (
//   <div>
//     <h2>TAPioca's Product Page</h2>

//     {/* Display Fruit Tea section */}
//     {groupedProducts['Fruit Tea'] && (
//       <div>
//         <h3>Fruit Tea Home-Kit Options</h3>
//         <div className="products">
//           {groupedProducts['Fruit Tea'].map((product) => (
//             <Product
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//               cart={cart}
//             />
//           ))}
//         </div>
//       </div>
//     )}

//     {/* Display Milk Tea section */}
//     {groupedProducts['Milk Tea'] && (
//       <div>
//         <h3>Milk Tea Home-Kit Options</h3>
//         <div className="products">
//           {groupedProducts['Milk Tea'].map((product) => (
//             <Product
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//               cart={cart}
//             />
//           ))}
//         </div>
//       </div>
//     )}

//     {/* Display Special Drink section */}
//     {groupedProducts['Special Drink'] && (
//       <div id="specialDrinksSection">
//         <h3>Speciality Drink Home-Kit Options</h3>
//         <div className="products">
//           {groupedProducts['Special Drink'].map((product) => (
//             <Product
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//               cart={cart}
//             />
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );
// };

// export default ProductPage;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';
import '../styles/ProductPage.css'; // Import your CSS file

const ProductPage = ({ productsData, addToCart, removeFromCart, cart, setCart }) => {
  const location = useLocation();

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

  return (
    <div className="product-page">
      <h2>TAPioca's Product Page</h2>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h3>{category} Home-Kit Options</h3>
          <div className="product-container">
            {groupedProducts[category].map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
