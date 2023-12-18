import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/UserProfilePage.css'

const UserProfilePage = () => {
  const { user } = useAuth();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className='my-account-page'>
      
        <h2>My Account</h2>
      
      <div className='my-account-border'>
        {user ? (
            <div>
              <p id='welcome-user' >Welcome, {capitalizeFirstLetter(user.username)}!</p>

              <h2> TAPioca User's Details: </h2>

              <p> <b> Full Name: </b> <i>{capitalizeFirstLetter(user.firstname)} {capitalizeFirstLetter(user.lastname)} </i> <button id='update-button'>Update</button></p> 
              <p> <b> Username: </b> <i>{user.username} </i> <button id='update-button'>Update</button></p>
              <p> <b> Email Address: </b> <i>{user.email} </i><button id='update-button'>Update</button></p>
              <p> <b> Want to leave TAPioca? </b> <button id='delete-button'>Delete My Account</button></p>
            </div>
        
        ) : (
          <p>Please log in to view your account information.</p>
        )}
      </div> 
    </div>
  );
};

export default UserProfilePage;

