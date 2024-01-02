import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/milk-tea">Milk Tea</Link>
        </li>
        <li>
          <Link to="/fruit-tea">Fruit Tea</Link>
        </li>
        <li>
          <Link to="/special-drinks">Special Drinks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
