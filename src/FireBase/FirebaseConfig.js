import firebase from "firebase/app";
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1ytHfO7-OJsmT1g4y7sjqHglxczU1fxM",
  authDomain: "consultas-porfolio.firebaseapp.com",
  projectId: "consultas-porfolio",
  storageBucket: "consultas-porfolio.appspot.com",
  messagingSenderId: "12981449212",
  appId: "1:12981449212:web:b941d269214fb701af0279",
  measurementId: "G-ZQ0N9RVEBV"
};

const googleProvider= new firebase.auth.GoogleAuthProvider()

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { firebase, db, googleProvider };