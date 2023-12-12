// import React from 'react';
// import { Link } from 'react-router-dom';

// const CheckoutPage = ({ cart, setCart }) => {
//   const handleCheckout = () => {
//     // Clear the cart after successful checkout
//     setCart([]);
//   };

//   return (
//     <div>
//       <h2>Checkout Page</h2>
//       <p>Review your order:</p>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - £{(item.price * item.quantity).toFixed(2)} (
//             {item.quantity} {item.quantity > 1 ? 'units' : 'unit'})
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleCheckout}>Confirm Order</button>
//       <Link to="/products">
//             <button>No, Continue Shopping</button>
//           </Link>
//     </div>
//   );
// };

// export default CheckoutPage;

// CheckoutPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Review your order:</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - £{(item.price * item.quantity).toFixed(2)} (
            {item.quantity} {item.quantity > 1 ? 'units' : 'unit'})
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Confirm Order</button>
      <Link to="/products">
        <button>No, Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
