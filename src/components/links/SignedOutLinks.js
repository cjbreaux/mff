import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
  return(
    <div>
      <NavLink to='/signup'>Register</NavLink>
      <NavLink to='/signin'>Sign In</NavLink>
    </div>
  );
}

export default SignedOutLinks;
