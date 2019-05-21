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

//   const location = new Promise((resolve, reject) => {
//     if (!geolocation) {
//       reject(new Error('Not Supported'));
//     }
//     geolocation.getCurrentPosition((position) => {
//       resolve(position);
//     }, () => {
//       reject (new Error('Permission denied'))
//     });
//   });
//
//   return {
//     type: type.GET_LOCATION,
//     location
//   }
// };
