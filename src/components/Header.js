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
            <b>TAP</b>ioca</Link>
        </div>
        
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>My Cart</Link>
            </li>
  
            {user ? (
              <>
                <li>
                  <Link to="/profile" onClick={toggleMenu}>My Account</Link>
                </li>
                <li>
                  <button id='logout-button' onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signup" onClick={toggleMenu}>Sign Up/Log In</Link>
              </li>
            )}
          <div className="search-icon">
            <FaSearch />
          </div>
   
          </ul>
  
        
      </header>
    </div>
  );
};

export default Header;

