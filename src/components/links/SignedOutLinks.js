import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
  return(
    <div>
      <NavLink to='/'>Register</NavLink>
      <NavLink to='/'>Sign In</NavLink>
    </div>
  );
}

export default SignedOutLinks;
