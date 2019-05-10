import React from 'react';
import styles from './styles.scss';

function SignIn() {
  return(
    <div>
      <form>
        <h5> Sign In </h5>
        <div className='flex'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
