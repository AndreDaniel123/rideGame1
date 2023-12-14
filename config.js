import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBJ0jW3Ipq8dJXKiIXtdgW-DRiLzJYu5FA",
    authDomain: "ridegame-8aa65.firebaseapp.com",
    projectId: "ridegame-8aa65",
    storageBucket: "ridegame-8aa65.appspot.com",
    messagingSenderId: "47179102232",
    appId: "1:47179102232:web:a3fab06a61f3ddcfa22b6d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
