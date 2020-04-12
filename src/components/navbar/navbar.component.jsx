import React, { Fragment } from 'react';
import './navbar.styles.css';

const Navbar = () => {
  const newsLinks = (
    <ul>
      <li>
        <a href='#!'>Europe</a>
      </li>
      <li>
        <a href='#!'>World</a>
      </li>
      <li>
        <a href='#!'>US</a>
      </li>
    </ul>
  );

  const userLinks = (
    <ul>
      <li>
        <a href='#!'>Search</a>
      </li>
      <li>
        <a href='#!'>Register</a>
      </li>
      <li>
        <a href='#!'>Login</a>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='#!'>
          <i className='fas fa-code'></i>Drad-And-Drop NEWS
        </a>
      </h1>
      <Fragment>{newsLinks}</Fragment>
      <Fragment>{userLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
