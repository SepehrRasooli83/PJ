"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSendOtp = async () => {
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setMessage(
          "Verification code sent successfully! Please check your phone."
        );
        setIsOtpSent(true);
      } else {
        setMessage("Failed to send verification code");
      }
    } catch (error) {
      setMessage("An error occurred");
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      phone,
      otp,
      redirect: false,
      callbackUrl: "/user/profile",
    });

    if (result?.error) {
      setMessage("Verification code expired or invalid please try again!");
    } else {
      router.push(result?.url || "/user/profile");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('/begin_bg_desk.png')`,
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm border-2 border-[#0080FF]">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign Up
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#0080FF] rounded-lg focus:outline-none focus:border-[#005bb5] transition-colors"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#0080FF] border-gray-300 rounded focus:ring-[#0080FF]"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {!isOtpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-[#0080FF] text-white py-2 rounded-lg hover:bg-[#005bb5] transition-colors"
            >
              Begin
            </button>
          )}

          {isOtpSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                placeholder="Enter the code we just sent"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full px-3 py-2 border-2 border-[#0080FF] rounded-lg focus:outline-none focus:border-[#005bb5] transition-colors"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#0080FF] text-white py-2 rounded-lg mt-4 hover:bg-[#005bb5] transition-colors"
              >
                Verify
              </button>
            </div>
          )}

          {message && (
            <p
              className={`mt-4 text-sm ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
