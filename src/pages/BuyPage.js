import React from 'react';

const BuyPage = ({ cart }) => {
  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>Thank you for your purchase!</p>
      <p>Order Summary:</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - £{(item.price * item.quantity).toFixed(2)} (
            {item.quantity} {item.quantity > 1 ? 'units' : 'unit'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyPage;
