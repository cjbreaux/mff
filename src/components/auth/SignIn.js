import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { signIn } from './../../actions/authActions';
import { Redirect } from 'react-router-dom';

function SignIn(props) {
  const {signIn, authError, auth} = props
  let _email;
  let _password;

  if (auth.uid) return <Redirect to='/' />
  function handleSubmit(e) {
    e.preventDefault();
    signIn({email: _email.value, password: _password.value});
    // _email = '';
    // _password = '';
  }
  return(
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className='f1'> Sign In </h1>
        <div>
          <div className='flex flex-column'>
            <label htmlFor='email'>Email</label>
            <input
              className='h2 mb2'
              type='email'
              id='email'
              ref={(input)=> {_email = input;}} />
          </div>
          <div className='flex flex-column'>
            <label htmlFor='password'>Password</label>
            <input
              className='h2 mb2'
              type='password'
              id='password'
              ref={(input)=> {_password = input;}} />
          </div>
          <div className='tc'>
            <button className='w-20 br3 bg-blue white h2' type='submit'>Login</button>
            <div>
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn:(creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
