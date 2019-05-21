import constants from './../constants';
const { type } = constants;

export const getLocation = () => {
  return (dispatch, getState) => {
    const geolocation = navigator.geolocation;

    if (!geolocation) {
      console.log('not supported')
    }

    geolocation.getCurrentPosition(position => {
      const location = position.coords
      dispatch({type: type.GET_LOCATION, location})
    })
  }
};
