import constants from './../constants';
const { type }  = constants;

const mapReducer = (state = [], action) => {
  switch(action.type) {
    case type.GET_MARKERS:
      return action.mapMarkers
    default:
      return state
  }
}

export default mapReducer;
