// src/components/SignOutButton.js

import React from "react";
import { signOut } from "../database/api";
import { useNavigate } from "react-router-dom"; // To navigate after sign-out

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      localStorage.removeItem("user"); // Remove userDoc from localStorage
      navigate("/signin"); // Redirect to sign-in page after sign-out
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
