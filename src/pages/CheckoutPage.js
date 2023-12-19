import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css'

const CheckoutPage = ({ cart, setCart, user }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user && user.email) {
      const order = {
        items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        date: new Date().toISOString(),
      };

      // Update order history
      const orderHistory = JSON.parse(localStorage.getItem(`${user.email}_orders`)) || [];
      orderHistory.push(order);
      localStorage.setItem(`${user.email}_orders`, JSON.stringify(orderHistory));

      // Clear the cart after successful checkout
      setCart([]);

      // Redirect to the user profile or any other desired page
      navigate('/profile');
    }
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='checkout-page'>
      <h2 id='checkout-page-title'>Checkout Page</h2>
      <p id='review-order'>Review your order:</p>
      <ul className='checkout-page-item-list'>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - £{(item.price * item.quantity).toFixed(2)} (
            {item.quantity} {item.quantity > 1 ? 'units' : 'unit'})
          </li>
        ))}
      </ul>
      <p> <b> Total Cost: £{cartTotal.toFixed(2)} </b> </p>
      <div className='checkout-buttons'>
        <Link to="/products">
          <button>No, Continue Shopping</button>
        </Link>
        <Link to='/buy'>
         <button id='confirm-order' onClick={handleCheckout}>Confirm Order</button>
        </Link>

      </div>
    </div>
  );
};

export default CheckoutPage;
