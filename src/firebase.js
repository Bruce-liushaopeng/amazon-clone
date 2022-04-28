// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJzsX4vwD3sz_wxlk-_ovfI-FpVCkqySk",
  authDomain: "clone-9d90e.firebaseapp.com",
  projectId: "clone-9d90e",
  storageBucket: "clone-9d90e.appspot.com",
  messagingSenderId: "602012425480",
  appId: "1:602012425480:web:f02b2244e497e7515820bd",
  measurementId: "G-9330XVGD4T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };