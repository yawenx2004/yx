import React from 'react';
import { NavLink } from 'react-router';
import './styles.scss';

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="left">: .</div>

      <ul className="right">
        <li><NavLink to="/" className="NavLink">home</NavLink></li>
        <li><NavLink to="/blog" className="NavLink">blog</NavLink></li>
        <li><NavLink to="/about" className="NavLink">about</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
