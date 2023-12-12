// components/Product.js
import React from 'react';
import '../styles/Product.css';

const Product = ({ product, addToCart, removeFromCart, cart }) => {

  // Find the product in the cart to get its quantity
  const cartProduct = cart.find(item => item.id === product.id);
  const quantityInCart = cartProduct ? cartProduct.quantity : 0;


  return (
    <div className="product-container">
      <div className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>£{product.price.toFixed(2)}</p>
        <p>Quantity in Cart: {quantityInCart}</p> {/* Display the quantity */}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        {quantityInCart > 0 && (
          <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;