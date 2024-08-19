// src/components/ForgotPassword.js

import React, { useState } from 'react';
import { resetPassword } from '../database/api';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetPassword(email);
    setEmail('');
  };

  return (
    <form onSubmit={handleResetPassword}>
      <h2>Forgot Password</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Send Password Reset Email</button>
    </form>
  );
};

export default ForgotPassword;
