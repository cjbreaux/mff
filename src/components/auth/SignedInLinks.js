import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return(
    <div>
      <NavLink to='/'>New Entry</NavLink>
      <NavLink to='/'>Sign Out</NavLink>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}

export default SignedInLinks;
