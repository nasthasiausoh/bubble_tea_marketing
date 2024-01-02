import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaSearch } from "react-icons/fa";
import '../styles/Header.css';

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
              <Link>ABOUT US</Link>
            </li>
  
            {user ? (
              <>
                <li>
                  <Link to="/profile" onClick={toggleMenu}>MY ACCOUNT</Link>
                </li>
                <li>
                  <button id='logout-button' onClick={handleLogout}>Logout</button>
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

