import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';

import SignedInLinks from './../links/SignedInLinks';
import SignedOutLinks from './../links/SignedOutLinks';

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
