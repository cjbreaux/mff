export const createEntry = (entry) => {
  return (dispatch, getState) => {
    //make call to firebase
    dispatch({type: 'CREATE_ENTRY', entry});
  }
}
