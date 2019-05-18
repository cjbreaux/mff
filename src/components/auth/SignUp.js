import React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../actions/authActions';

function SignUp(props) {
  const {auth, signUp, authError} = props;
  let _fname;
  let _lname;
  let _email;
  let _password;
  function handleSubmit(e) {
    e.preventDefault();
    signUp({email: _email.value, password: _password.value, firstName: _fname.value, lastName: _lname.value})
    //run fb authentication with credentials
    // _fname = '';
    // _lname = '';
    // _email = '';
    // _password = '';
  }
  if (auth.uid) return <Redirect to='/' />
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h5> Sign In </h5>
        <div className='flex'>
        <div>
          <label htmlFor='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            ref={(input)=> {_fname = input;}} />
        </div>
        <div>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            ref={(input)=> {_lname = input;}} />
        </div>
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
        </div>
        <div>
          {authError ? <p>{ authError }</p> : null}
        </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
