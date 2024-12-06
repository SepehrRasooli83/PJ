'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // Import signIn from NextAuth

export default function SignUp() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // Track OTP sent status
  const router = useRouter(); // Next.js router

  // Handle sending OTP
  const handleSendOtp = async () => {
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setMessage('OTP sent successfully! Please check your phone.');
        setIsOtpSent(true); // OTP has been sent
      } else {
        setMessage('Failed to send OTP');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }
  };

  // Handle OTP verification
  const handleSubmit = async () => {

    console.log('got here 0');

    //Use signIn from next-auth to handle login using the credentials provider
    const result = await signIn('credentials', {
      phone,
      otp,
      redirect: false, // Don't automatically redirect
      callbackUrl: '/user/profile',
    });

    console.log('got here 1');

    if (result?.error) {
      setMessage('Invalid OTP or OTP expired');
    } else {
      router.push(result?.url || '/user/profile'); // Redirect to the profile page
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {!isOtpSent && (
          <button type="button" onClick={handleSendOtp}>
            Send OTP
          </button>
        )}

        {isOtpSent && (
          <div>
            <label>OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="button" onClick={handleSubmit}>
              Verify OTP
            </button>
          </div>
        )}

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
