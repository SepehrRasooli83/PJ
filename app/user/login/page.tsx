'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import axios from 'axios';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      await axios.post('/api/auth/send-otp', { phone });
      setOtpSent(true);
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const handleLogin = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      phone,
      otp,
    });

    if (result?.error) {
      console.error('Login failed:', result.error);
    } else {
      console.log('Login successful!');
    }
  };

  return (
    <div className="container">
      <h1>Login with SMS</h1>
      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOtp} disabled={otpSent}>
        {otpSent ? 'OTP Sent' : 'Send OTP'}
      </button>
      {otpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}
