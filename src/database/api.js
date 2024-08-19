// src/database/api.js

import { auth, db } from "./firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Sign Up Function
export const signUp = async (email, password, userData) => {
  

  //clearing the local storage


  console.log("removing Current User");
  localStorage.removeItem("user");
  

  //
   const toastId = toast.loading("Signing up...");

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store user data in Firestore

    console.log( userData);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("UserSAved in Local Storage", user.email);
    await setDoc(doc(db, "users", user.uid), userData);


    toast.update(toastId, {
      render: "Sign up successful!",
      type: "success",
      isLoading: false,
      autoClose:true
    });
    return user;
  } catch (error) {

    
      toast.update(toastId, {
        isLoading: false,
        autoClose: true,
      });
    if (error.code === "auth/email-already-in-use") {
      toast.error("User is already registered. Please sign in.", {
        isLoading: false,
        autoClose: 3000, // Automatically close after 3 seconds
      });
    } else {
      toast.error(`Error: ${error.message}`, {
        isLoading: false,
        autoClose: 3000, // Automatically close after 3 seconds
      });
      
    }
    return null;
  }
};

  // Sign In Function
  export const signIn = async (email, password) => {


    //clearing the localStorage
    
  console.log("removing Current User");
    localStorage.removeItem("user");

    //signin
    const toastId = toast.loading("Signing in...",{autoClose:300});

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log( userCredential);
      const user = userCredential.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        toast.update(toastId, {
          render: "User does not exist in database.",
          type: "error",
          isLoading: false,
          autoClose:true
        });
        return null;
      }

      
      localStorage.setItem("user", JSON.stringify(user));
      console.log("UserSAved in Local Storage", user.email);
      

      toast.update(toastId, {
        render: "Sign in successful!",
        type: "success",
        isLoading:false,
        autoClose:2000,
      });
      return user;
    } catch (error) {
      console.error("Error signing in:", error.message);
      toast.update(toastId, {
        render: "Error signing in.",
        type: "error",
        isLoading:false,
        autoClose:200,
      });
      return null;
    }
  };

// Password Reset Function
export const resetPassword = async (email) => {
  const toastId = toast.loading("Sending password reset email...");

  try {
    await sendPasswordResetEmail(auth, email);
    toast.update(toastId, { 
      render: "Password reset email sent!",
      type: "success",
      isLoading: false,
    });
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    toast.update(toastId, {
      render: "Error sending password reset email.",
      type: "error",
      isLoading: false,
    });
  }
};

// Sign Out Function
export const signOut = async () => {
  localStorage.removeItem("user");
  const toastId = toast.loading("Signing out.!..",{autoClose:2000});

  try {
    await firebaseSignOut(auth);
    toast.update(toastId, {
      render: "Successfully signed out.",
      type: "success",
      isLoading: false,
      autoClose:true,
    });
    return true;
  } catch (error) {
    console.error("Error signing out:", error.message);
    toast.update(toastId, {
      render: "Error signing out.",
      type: "error",
      isLoading: false,
      autoClose:true,
    });
    return false;
  }
};
