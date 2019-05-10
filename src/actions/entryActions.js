export const createEntry = (entry) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make call to firebase
    const firestore = getFirestore();
    firestore.collection('entries').add({
      ...entry,
      firstName: 'Test',
      lastName: 'Case',
      userId: 12313123,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: 'CREATE_ENTRY', entry});
    }).catch((err)=> {
      dispatch({type: 'CREATE_ENTRY_ERROR', err});
    })
  }
}
