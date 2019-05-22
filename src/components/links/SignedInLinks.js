import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './../../actions/authActions';

function SignedInLinks(props) {
  return(
    <div>
      <NavLink to='/newentry'><i className="fas fa-folder-plus fa-3x black"></i></NavLink>
      <i class="fas fa-sign-out-alt fa-3x ml4" onClick={props.signOut}></i>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
