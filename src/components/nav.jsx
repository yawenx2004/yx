import React from 'react';
import { NavLink } from 'react-router';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className="NavLink">home</NavLink></li>
        <li><NavLink to="/about" className="NavLink">about</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
