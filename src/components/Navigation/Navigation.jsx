import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="components__nav">
    <Link to="/" className="components__nav__nav-link">Home</Link> |
    <Link to="/search" className="components__nav__nav-link">Search</Link>
  </nav>
);

export default Navigation;
