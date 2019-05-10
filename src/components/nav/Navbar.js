import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';

import SignedInLinks from './../auth/SignedInLinks';
import SignedOutLinks from './../auth/SignedOutLinks';

function Navbar() {
  return (
    <div className='navContainer'>
      <Link to ='/'>Home</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  );
}

export default Navbar;
