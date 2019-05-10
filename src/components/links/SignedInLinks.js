import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return(
    <div>
      <NavLink to='/newentry'>New Entry</NavLink>
      <NavLink to='/signout'>Sign Out</NavLink>
    </div>
  );
}

export default SignedInLinks;
