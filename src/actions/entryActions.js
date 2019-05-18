import constants from './../constants';
const {type} = constants;

export const createEntry = (entry) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make call to firebase
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('entries').add({
      ...entry,
      firstName: profile.firstName,
      lastName: profile.lastName,
      userId,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: type.CREATE_ENTRY, entry});
    }).catch((err)=> {
      dispatch({type: type.CREATE_ENTRY_ERROR, err});
    })
  }
}
