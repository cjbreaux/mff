import authReducer from './authReducer';
import entryReducer from './entryReducer';
import locationReducer from './locationReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  entry: entryReducer,
  location: locationReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
