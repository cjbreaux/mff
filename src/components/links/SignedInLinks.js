import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './../../actions/authActions';

function SignedInLinks(props) {
  return(
    <div>
      <NavLink to='/newentry'>New Entry</NavLink>
      <a onClick={props.signOut}>Log Out</a>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
