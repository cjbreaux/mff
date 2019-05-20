import constants from './../constants';
import { v4 } from 'uuid';
const { type } = constants;

export const createEntry = (entry) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make call to firebase
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore.collection('entries').doc(userId).update({
      entries: firestore.FieldValue.arrayUnion({
        ...entry,
        firstName: profile.firstName,
        lastName: profile.lastName,
        entryId: v4(),
        createdAt: new Date()
      })
    }).then(()=> {
      dispatch({type: type.CREATE_ENTRY, entry});
    }).catch((err)=> {
      firestore.collection('entries').doc(userId).set({
        entries: firestore.FieldValue.arrayUnion({
          ...entry,
          firstName: profile.firstName,
          lastName: profile.lastName,
          entryId: v4(),
          createdAt: new Date()
        })
      })
      dispatch({type: type.CREATE_ENTRY_ERROR, err});
    })
  }
}

//try setting merge to true instead of relying on the catch

export default function setSelectedEntry(uuid) {
  return {
    type: type.SELECTED_ENTRY,
    uuid
  }
}
