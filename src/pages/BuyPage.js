import React from 'react';
import '../styles/BuyPage.css'

const BuyPage = ({ cart, discountedTotal }) => {

  const cartTotal = discountedTotal !== null ? discountedTotal : cart.reduce((total, item) => total + item.price * item.quantity, 0);
 
  return (
    <div className='order-page'>
      <h1>TAPioca thanks you!</h1>
      <h2>Your order was completed successfully.</h2>
      <img src="https://media1.tenor.com/m/_cb_93aqXpIAAAAC/bubble-tea-drink.gif" alt="Bubble Tea Drink" width={200}/>

      <div className='order-summary-content'>
        <p id='order-summary-heading'>Order Summary</p>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
             <b>{item.name}</b>  - £{(item.price * item.quantity).toFixed(2)} [
              {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}]
            </li>
          ))}
        </ul>
        <p> <b> Final Cost: £{cartTotal.toFixed(2)} </b> </p>
      </div>

      

      <div className='order-confirm-message'>
        <p>An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records. Estimated delivery time is 3-5 working days. <br></br>You can visit the My Account page at any time to check the status of your order.</p>
      </div>
      </div>
  );
};

export default BuyPage;