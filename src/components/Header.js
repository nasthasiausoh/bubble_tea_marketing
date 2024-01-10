import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaSearch } from "react-icons/fa";
import '../styles/Header.css';
import { sendZetaAPIRequest } from '../utils/zetaApi';

const Header = ({ cart, setCart }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setCart([]); // Clear the cart on logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutUsLinkClick = () => {
    // Trigger the Zeta API call when the ABOUT US link is clicked
    sendZetaAPIRequest()
    .then(response => {
      // Handle the API response if needed
      console.log('Zeta API response:', response);
    })
    .catch(error => {
      // Handle API error
      console.error('Zeta API error:', error);
    });
  };

  return (
    <div className="header-wrapper">
      <header>
        <div className="logo">
          <Link to="/">
            <b>TAP</b>ioca
          </Link>
        </div>
        
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>HOME</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>CART</Link>
            </li>
            <li>
              <Link id='about-us-link' onClick={handleAboutUsLinkClick}>ABOUT US</Link>
            </li>
  
            {user ? (
              <>
                <li>
                  <Link to="/profile" onClick={toggleMenu}>MY ACCOUNT</Link>
                </li>
                <li>
                  <button id='logout-button' onClick={handleLogout}>LOG OUT</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signup" onClick={toggleMenu}>SIGNUP/LOGIN</Link>
              </li>
            )}
          <div className="search-icon">
            <input type='text' placeholder='Search bubble tea...'></input>
            <FaSearch />
          </div>
   
          </ul>
  
        
      </header>
    </div>
  );
};

export default Header;

