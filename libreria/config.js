import firebase from "firebase/app"
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbrAKc7kh-UHILkVgb8H9AdZRhETWXOgk",
  authDomain: "prueba-sergio-santurde-mota.firebaseapp.com",
  databaseURL: "https://prueba-sergio-santurde-mota-default-rtdb.firebaseio.com",
  projectId: "prueba-sergio-santurde-mota",
  storageBucket: "prueba-sergio-santurde-mota.appspot.com",
  messagingSenderId: "256609866225",
  appId: "1:256609866225:web:87ad9de19723a7e8fab450",
  measurementId: "G-SBMKY4JWHM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };