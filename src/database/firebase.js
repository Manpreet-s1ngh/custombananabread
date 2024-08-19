// src/database/firebase.js
import firebase from "firebase/app";
import "firebase/auth"; // Import authentication module
import firebaseConfig from "./firebaseconfig";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
