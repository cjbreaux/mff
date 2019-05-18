import constants from './../constants';
const {type} = constants;
const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case type.LOGIN_ERROR:
    return {
      ...state,
      authError: 'there was an error'
    }
    case type.LOGIN_SUCCESS:
    return {
      ...state,
      authError: null
    }
    case type.SIGNOUT_SUCCESS:
      console.log('signout success')
      return state;
    case type.SIGNUP_SUCCESS:
      console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case type.SIGNUP_ERROR:
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducer;
