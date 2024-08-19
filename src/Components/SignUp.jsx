import React, { useState } from "react";
import { signUp } from "../database/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/SignUp.css"; // Import your CSS file

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const user = await signUp(email, password, { name, email });
      if (user) {
        toast.success("Sign-up successful!",{
          autoClose:3000
        });
        navigate("/homepage"); // Redirect to dashboard after successful sign-up
      }
    } catch (error) {
      toast.error("Sign-up failed: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp} className="signup-form">
        <h2 className="signup-title">Create Your Account</h2>
        <label className="signup-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-input"
            required
          />
        </label>
        <label className="signup-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            required
          />
        </label>
        <label className="signup-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            required
          />
        </label>
        
        <p onClick={()=>{navigate("/signIn")}}> If already regisered , LOGIN</p>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
