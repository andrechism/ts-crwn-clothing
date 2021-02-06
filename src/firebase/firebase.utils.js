import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAlD_vaMVxZSOqM1geinevsNqbbitWELZI",
  authDomain: "crwn-db-e8ccd.firebaseapp.com",
  projectId: "crwn-db-e8ccd",
  storageBucket: "crwn-db-e8ccd.appspot.com",
  messagingSenderId: "870342542537",
  appId: "1:870342542537:web:750b5f18445ce0d11cb918",
  measurementId: "G-3HH59EF2TS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;