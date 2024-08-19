


// src/database/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcIU2BhSqLucUWJAKoaQcYBOpmDoN4IxU",
  authDomain: "bananabread-ea771.firebaseapp.com",
  projectId: "bananabread-ea771",
  storageBucket: "bananabread-ea771.appspot.com",
  messagingSenderId: "453127763321",
  appId: "1:453127763321:web:33527c47d22807dbc72ba8",
  measurementId: "G-7Q92MG925C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

