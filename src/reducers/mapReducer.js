import constants from './../constants';
const { type }  = constants;

const mapReducer = (state = {}, action) => {
  switch(action.type) {
    case type.GET_MARKERS:
    const results = action.mapMarkers.map((mark => {return Object.assign({}, {lat: mark.lat, lng: mark.lng})}));
      return results
    default:
      return state
  }
}

export default mapReducer;

//need to transform this object before I can upload to firebase
