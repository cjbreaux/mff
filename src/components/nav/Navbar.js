import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import SignedInLinks from './../links/SignedInLinks';
import SignedOutLinks from './../links/SignedOutLinks';

function Navbar(props) {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <div className='navContainer ba br4 bw1'>
      <Link to ='/'><i className="fas fa-home fa-3x blue ml2"></i></Link>
      { links }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
