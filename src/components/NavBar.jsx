import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </nav>
);

export default NavBar;
