import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

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

const mapStateToProps = state => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(Navbar);
