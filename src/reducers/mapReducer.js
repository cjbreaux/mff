import constants from './../constants';
const { type }  = constants;

const mapReducer = (state = {}, action) => {
  switch(action.type) {
    case type.GET_MARKERS:
    // Need to transform this object before uploading to Firebase
    const results = action.mapMarkers.map((mark => {return Object.assign({}, {lat: mark.lat, lng: mark.lng})}));
      return results
    default:
      return state
  }
}

export default mapReducer;
