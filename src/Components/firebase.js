// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtoMwtdLi15W_xGgHuwGBIrc5EFf9998",
  authDomain: "bananabread-1ce4c.firebaseapp.com",
  databaseURL: "https://bananabread-1ce4c-default-rtdb.firebaseio.com",
  projectId: "bananabread-1ce4c",
  storageBucket: "bananabread-1ce4c.appspot.com",
  messagingSenderId: "260088609386",
  appId: "1:260088609386:web:8830e96b1f49d75c0ba813",
  measurementId: "G-VKT1RNMVMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
