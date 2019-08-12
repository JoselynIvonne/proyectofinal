import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {/* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCRA2PV5Q1mw_M8jn_5FbUhSEc7AYSQHwo",
    authDomain: "gyanimacion.firebaseapp.com",
    databaseURL: "https://gyanimacion.firebaseio.com",
    projectId: "gyanimacion",
    storageBucket: "gyanimacion.appspot.com",
    messagingSenderId: "698067989319",
    appId: "1:698067989319:web:12ff8c512fc3ce6a"
}
const fire =firebase.initializeApp(config);
export default fire;