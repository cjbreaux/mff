import constants from './../constants';
const {initialState} = constants;

const entryReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_ENTRY':
    console.log('created entry', action.entry)
  }
  return state;
}

export default entryReducer;
