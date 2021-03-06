import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { signIn, anonLogIn } from './../../actions/authActions';
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
  function handleClick() {
    const {anonLogIn, authError, auth} = props;
    anonLogIn();
  }

  return(
    <section className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1 className='f2'> Mushroom Forager's Friend </h1>
        <h2 className='f3'> Sign In </h2>
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
          </div>
        </div>
      </form>
      <div className="tc">
        <button className='w-20 br3 bg-green white h2'onClick={handleClick}>Guest</button>
        { authError ? <p className="error">{authError}</p> : null}
      </div>
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
    signIn:(creds) => dispatch(signIn(creds)),
    anonLogIn:() => dispatch(anonLogIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
