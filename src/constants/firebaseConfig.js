import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyAwDeevoCa23660BwOKik2JhBi9sh-HQV4",
    authDomain: "foragers-friend.firebaseapp.com",
    databaseURL: "https://foragers-friend.firebaseio.com",
    projectId: "foragers-friend",
    storageBucket: "foragers-friend.appspot.com",
    messagingSenderId: "416139964834",
    appId: "1:416139964834:web:db91837a5484d463"
};

 firebase.initializeApp(firebaseConfig);
 firebase.firestore();

 export default firebase;
