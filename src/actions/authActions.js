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

export const anonLogIn = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInAnonymously().then(()=> {
      dispatch({type: type.LOGIN_SUCCESS});
    }).catch((err) => {
      dispatch({type: type.LOGIN_ERROR, err});
    })
  }
  console.log("anonlogin")
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const fireStore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return fireStore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName
      })
    }).then(() => {
      dispatch({type: type.SIGNUP_SUCCESS})
    }).catch(err => {
      dispatch({type: type.SIGNUP_ERROR, err})
    })
  }
}
