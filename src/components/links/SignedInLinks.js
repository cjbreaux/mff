import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './../../actions/authActions';

function SignedInLinks(props) {
  return(
    <div>
      <NavLink to='/newentry'>New Entry</NavLink>
      <p onClick={props.signOut}>Log Out</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
