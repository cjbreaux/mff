import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
  return(
    <div>
      <NavLink to='/signup'><i className="fas fa-user-plus fa-3x black"></i></NavLink>
      <NavLink to='/signin'><i className="fas fa-sign-in-alt fa-3x black ml5 mr2"></i></NavLink>
    </div>
  );
}

export default SignedOutLinks;
