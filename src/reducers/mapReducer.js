import constants from './../constants';
const { type }  = constants;

const mapReducer = (state = {}, action) => {
  switch(action.type) {
    case type.GET_MARKERS:
      // let newMarkers = Object.assign({}, state, {
      //   mapMakers: action.mapMarkers
      // })
      return action.mapMarkers
    default:
      return state
  }
}

export default mapReducer;
