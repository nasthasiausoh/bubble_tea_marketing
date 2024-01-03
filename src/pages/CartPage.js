import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';


const CartPage = ({ cart, addToCart, removeFromCart }) => {
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='my-cart-page'>
      <h2 id='my-cart'>My Cart</h2>

      {cart.length === 0 ? (
        <p id='empty-cart'>Your cart is empty. <Link to="/products">Browse products</Link></p>
      ) : (
        <div>
          <ul className='cart-item-list'>
          
                <div className='product-in-cart'>
                {cart.map((item) => (
              <li key={item.id}>
               <img id='cart-image-icon' src={item.image}></img>  {item.name} - £{(item.price * item.quantity).toFixed(2)} (
                {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}){' '}
                <button onClick={() => addToCart(item)}>Add</button>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>    
            ))}
            </div>
          </ul>

          <p id='total-cost'> <b> Total Cost: £{cartTotal.toFixed(2)} </b> </p>

          <Link to="/checkout">
            <button id='checkout-button' className='proceed-to-checkout'>Proceed to Checkout</button>
          </Link>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

