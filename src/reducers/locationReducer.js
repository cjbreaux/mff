import constants from './../constants';
const { type} = constants;

const locationReducer = (state = {}, action) => {
  switch(action.type) {
  case type.GET_LOCATION:
    return action.location;
  case type.GET_LOCATION_ERROR:
    console.log('location error');
    return state;
  default:
    return state
  }
}

export default locationReducer;
