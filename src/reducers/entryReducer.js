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
    default:
      return state;
  }
}

export default entryReducer;
