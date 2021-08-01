import firebase from "firebase";
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN5AkTUR4EXphLbdmIhJi1Dzls-xWAZcU",
  authDomain: "facebook-clone-5c2d6.firebaseapp.com",
  projectId: "facebook-clone-5c2d6",
  storageBucket: "facebook-clone-5c2d6.appspot.com",
  messagingSenderId: "883860545839",
  appId: "1:883860545839:web:c1709877a2fa7467e901da",
  measurementId: "G-XN7XKJ1ZSR",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
