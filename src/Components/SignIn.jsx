import React, { useState } from "react";
import { signIn } from "../database/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/SignIn.css"; // Import your CSS file
// import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const user = await signIn(email, password);
      if (user) {
        


        // localStorage.setItem("userDoc", JSON.stringify(userDoc.data()));
        console.log("User Store Saved")
        navigate("/homepage"); // Redirect to dashboard after successful sign-in
      }
    } catch (error) {
      toast.error("Sign-in failed: " + error.message);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSignIn} className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        <label className="signin-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signin-input"
            required
          />
        </label>
        <label className="signin-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
            required
          />
        </label>
        <button type="submit" className="signin-button">
          Sign In
        </button>

        <p
          onClick={() => {
            navigate("/signUP");
          }}
        >
          {" "}
          If not registered , SIGN UP..
        </p>
      </form>
    </div>
  );
};

export default SignIn;
