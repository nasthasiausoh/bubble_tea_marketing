import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Browse products</Link></p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - £{(item.price * item.quantity).toFixed(2)} (
                {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}){' '}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>

          <p>Total Cost: £{cartTotal.toFixed(2)}</p>

          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
