import React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

function SignUp(props) {
  const {auth} = props;
  let _fname;
  let _lname;
  let _email;
  let _password;
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    console.log(_fname.value, _lname.value, _email.value, _password.value)
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
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp);
