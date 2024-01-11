import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/UserProfilePage.css'

const UserProfilePage = () => {
  const { user } = useAuth();

  // const capitalizeFirstLetter = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
      return ''; // Return an empty string if str is not a non-empty string
    }
  
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  

  return (
    <div className='my-account-page'>
      
      <div className='my-account-border'>
        {user ? (
            <div>
              <p id='welcome-user' > Welcome to TAPioca, {capitalizeFirstLetter(user.username)}!</p>

              <div className='user-section'>
                <h2> Personal Details: </h2>

                <p> Full Name: <i>{capitalizeFirstLetter(user.first_name)} {capitalizeFirstLetter(user.last_name)} </i> <button id='update-button'>Update</button></p> 
                <p> Username:  <i>{user.username} </i> <button id='update-button'>Update</button></p>
                <p> Email Address: <i>{user.email} </i><button id='update-button'>Update</button></p>
                <p> Change Password? <button id='update-button'>Update</button> </p>
                <p> Want to leave TAPioca? <button id='delete-button'>Delete My Account</button></p>
              </div>
            </div>
        
        ) : (
          <p>Please log in to view your account information.</p>
        )}
      </div> 
    </div>
  );
};

export default UserProfilePage;

