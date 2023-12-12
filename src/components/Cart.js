import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - £{(item.price * item.quantity).toFixed(2)} (
            {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}){' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
