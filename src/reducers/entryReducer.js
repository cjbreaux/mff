import constants from './../constants';
const {initialState, type} = constants;

const entryReducer = (state = {}, action) => {
  switch(action.type) {
    case type.CREATE_ENTRY:
      console.log('created entry', action.entry);
      return state;
    case type.CREATE_ENTRY_ERROR:
      console.log('create entry error', action.err)
      return state;
    case type.SELECTED_ENTRY:
      const newState = Object.assign({}, state, {
        currentlySelectedEntry: action.uuid
      })
      return newState;
    default:
      return state;
  }
}

export default entryReducer;
