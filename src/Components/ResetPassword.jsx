import React, { useState } from "react";
import { resetPassword } from "../database/api "; // Import your password reset function

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    try {
      await resetPassword(email);
    } catch (error) {
      console.error("Error during password reset:", error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
