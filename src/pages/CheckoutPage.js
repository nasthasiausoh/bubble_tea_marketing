// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/CheckoutPage.css'

// const CheckoutPage = ({ cart, setCart, user }) => {
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     if (user && user.email) {
//       const order = {
//         items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
//         total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
//         date: new Date().toISOString(),
//       };

//       // Update order history
//       const orderHistory = JSON.parse(localStorage.getItem(`${user.email}_orders`)) || [];
//       orderHistory.push(order);
//       localStorage.setItem(`${user.email}_orders`, JSON.stringify(orderHistory));

//       // Clear the cart after successful checkout
//       setCart([]);

//       // Redirect to the user profile or any other desired page
//       navigate('/profile');
//     }
//   };

//   const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className='checkout-page'>
//        <h2 id='review-order'>Review Your Order:</h2>
//         <ul className='checkout-page-item-list'>
//           {cart.map((item) => (
//             <li key={item.id}>
//               <img id='cart-image-icon' src={item.image}></img> {item.name}- £{(item.price * item.quantity).toFixed(2)} [
//               {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}]
//             </li>
//            ))}
//         </ul>

//         <h3 id='checkout-total-cost'> Total Cost: £{cartTotal.toFixed(2)} </h3>

//       <div className='coupon-section'>
//        <p>Coupon Code:</p>
//        <input type='text' placeholder='Enter Coupon Code'></input>
//       </div>

//       <div className='checkout-buttons'>
//         <Link to="/">
//           <button>No, Continue Shopping</button>
//         </Link>
//         <Link to='/buy'>
//          <button id='confirm-order' onClick={handleCheckout}>Confirm Order</button>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css'

const CheckoutPage = ({ cart, setCart, user, setDiscountedTotal}) => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  const handleCheckout = () => {
    // Apply coupon discount based on the entered coupon code
    if (couponCode === 'WELCOME10') {
      applyCouponDiscount(0.1); // 10% discount
    } else if (couponCode === 'BDAY25' || couponCode === 'TAPIOCA25') {
      applyCouponDiscount(0.25); // 25% discount
    } else {
      setCouponMessage('Invalid coupon code. Please enter a valid coupon code.');
    }
  };

  const applyCouponDiscount = (discountRate) => {
    const discountedCart = cart.map((item) => ({
      ...item,
      discountedPrice: (item.price * (1 - discountRate)) * item.quantity,
    }));

    setCart(discountedCart);
    const discountedTotal = calculateDiscountedTotal(discountedCart);
    setDiscountedTotal(discountedTotal); // Set discountedTotal in the state
    setCouponMessage(`Coupon "${couponCode}" applied successfully. Discounted total: £${discountedTotal.toFixed(2)}`);
  };

  const calculateDiscountedTotal = (discountedCart) => {
    return discountedCart.reduce((total, item) => total + item.discountedPrice, 0);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='checkout-page'>
       <h2 id='review-order'>Review Your Order:</h2>
        <ul className='checkout-page-item-list'>
          {cart.map((item) => (
            <li key={item.id}>
              <img id='cart-image-icon' src={item.image}></img> {item.name}- £{(item.price * item.quantity).toFixed(2)} [
              {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}]
            </li>
           ))}
        </ul>

        <h3 id='checkout-total-cost'> Total Cost: £{cartTotal.toFixed(2)} </h3>

      <div className='coupon-section'>
       <p>Coupon Code:</p>
       <input
          type='text'
          placeholder='Enter Coupon Code'
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button onClick={handleCheckout}>Apply Coupon</button>
        {couponMessage && <p className={couponMessage.includes('Invalid') ? 'error-message' : 'success-message'}>{couponMessage}</p>}
      </div>


      <div className='checkout-buttons'>
        <Link to="/">
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