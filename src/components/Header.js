// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import '../styles/Header.css';

// const Header = ({ cart, setCart }) => {
//   const { user, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Use useEffect to update the component when cart changes
//   useEffect(() => {
//     // This will re-render the component when cart changes
//   }, [cart]);

//   const handleLogout = () => {
//     logout();
//     setCart([]); // Clear the cart on logout
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="header-wrapper">
//       <header>
//         <div className="logo">
//           <Link to="/">TAPioca</Link>
//         </div>
//         <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
//           <div className="menu-icon" onClick={toggleMenu}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/products">Our Products</Link>
//             </li>
//             <li>
//               <Link to="/cart">My Cart</Link>
//             </li>
//             {user ? (
//               <>
//                 <li>
//                   <Link to="/profile">My Account</Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout}>Logout</button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link to="/signup">Sign Up/Log In</Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;

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
          <Link to="/">TAPioca</Link>
        </div>
        
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            {/* <li>
              <Link to="/products" onClick={toggleMenu}>Our Products</Link>
            </li> */}
            <li>
              <Link to="/cart" onClick={toggleMenu}>My Cart</Link>
            </li>
  
            {user ? (
              <>
                <li>
                  <Link to="/profile" onClick={toggleMenu}>My Account</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
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

