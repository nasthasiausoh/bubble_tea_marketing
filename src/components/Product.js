import React from 'react';
import '../styles/Product.css';

const Product = ({ product, addToCart, removeFromCart, cart }) => {
  const cartProduct = cart.find((item) => item.id === product.id);
  const quantityInCart = cartProduct ? cartProduct.quantity : 0;

  return (
    <div className="product">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>£{product.price.toFixed(2)}</p>
      <div className="cart-actions">
      <button id='update-cart' onClick={() => addToCart(product)}>Add to Cart</button>

      <button id='update-cart' onClick={() => removeFromCart(product)}>Remove from Cart</button>
              {quantityInCart > 0 && (
      <>
      <span className="quantity-in-cart">x{quantityInCart} added to your cart.</span>
      </>
        )}
      </div>
    </div>
  );
};

export default Product;

