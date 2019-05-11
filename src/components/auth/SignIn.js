import React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import {signIn} from './../../actions/authActions';

function SignIn(props) {
  const {signIn, authError} = props
  let _email;
  let _password;
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    console.log(_email.value, _password.value)
    //run fb authentication with credentials
    signIn({email: _email.value, password: _password.value})
    // _email = '';
    // _password = '';
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h5> Sign In </h5>
        <div className='flex'>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              ref={(input)=> {_email = input;}} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              ref={(input)=> {_password = input;}} />
          </div>
          <div>
            <button type='submit'>Login</button>
            <div>
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn:(creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
