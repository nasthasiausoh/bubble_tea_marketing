import React from 'react';

const Product = ({ product, addToCart, removeFromCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>£{product.price.toFixed(2)}</p>
      <div className="cart-actions">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;
