import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserProfilePage = () => {
  const { user } = useAuth();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h2>My Account</h2>
      {user ? (
        <div>
          <p>Welcome, {capitalizeFirstLetter(user.username)}!</p>

          <h2>User Details</h2>

          <p> <b> Full Name: </b> <i>{capitalizeFirstLetter(user.firstname)} {capitalizeFirstLetter(user.lastname)}! </i></p>
          <p> <b> Username: </b> <i>{user.username}</i></p>
          <p> <b> Email Address: </b> <i>{user.email}</i></p>
        </div>
      ) : (
        <p>Please log in to view your account information.</p>
      )}
    </div>
  );
};

export default UserProfilePage;

