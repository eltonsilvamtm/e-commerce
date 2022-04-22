import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzPXPZY3YZlPs8aFLmfCSTn68UXrzLTC8",
    authDomain: "e-commerce-31f49.firebaseapp.com",
    projectId: "e-commerce-31f49",
    storageBucket: "e-commerce-31f49.appspot.com",
    messagingSenderId: "229555320131",
    appId: "1:229555320131:web:5ee8eabc70a586842babf6",
    measurementId: "G-56KGT3HRWX"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export { db, auth};