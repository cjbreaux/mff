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
    <section className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1 className='f1'> Sign Up </h1>
        <div className='flex flex-column'>
        <div className='flex flex-column'>
          <label htmlFor='fname'>First Name</label>
          <input
            className='h2 mb2'
            type='text'
            id='fname'
            ref={(input)=> {_fname = input;}} />
        </div>
        <div className='flex flex-column'>
          <label htmlFor='lname'>Last Name</label>
          <input
            className='h2 mb2'
            type='text'
            id='lname'
            ref={(input)=> {_lname = input;}} />
        </div>
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
        <div>
          {authError ? <p>{ authError }</p> : null}
        </div>
        </div>
      </form>
    </section>
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
