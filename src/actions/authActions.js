import constants from './../constants';
const {type} = constants;

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(()=> {
      dispatch({type: type.LOGIN_SUCCESS});
    }).catch((err) => {
      dispatch({type: type.LOGIN_ERROR, err});
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(()=> {
      dispatch({type: type.SIGNOUT_SUCCESS});
    });
  }
}
