'use client'
import React, { useState } from "react";
import Link from "next/link";
import AuthImageSlider from "@/components/auth/AuthImageSlider";
import AuthButton from "@/components/auth/AuthButton";
import AuthOtpInput from "@/components/auth/AuthOtpInput";
import toast, { Toaster } from 'react-hot-toast';
import { redirect, useSearchParams } from "next/navigation";

// Left side slider content
const slides = [
  {
    image: "/hero6.jpg",
    title: "Almost\nThere!",
    subtitle:
      "Just one more step to unlock your account. Verify your email to get started.",
  },
  {
    image: "/cat1.jpg",
    title: "Secure Your\nAccount.",
    subtitle:
      "We take your security seriously. Email verification keeps your account safe.",
  },
  {
    image: "/hero3.jpg",
    title: "Welcome to\nThe Family.",
    subtitle:
      "You're moments away from joining a community that celebrates style and quality.",
  },
];

const VerifyEmail = () => {

  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  
  const handleOtp = async() => {
    try {
    
      if (!otp) return setErrors("Otp is required.");

      const res = await fetch('http://localhost:8000/auth/verifyotp',{
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({otp,email}),
      })
      const data = await res.json()
      console.log(data)
      if(!res.ok){
        if(data.message === 'Invalid or expired OTP') setErrors('Invalid or expired OTP')
        if(data.message === 'Invalid request') setErrors('Invalid request')
        return
      }

      toast.success(data.message,{
        duration: 5000,
       position: 'top-center',
      });

      setTimeout(()=>{
        redirect('/signin')
      },3500)






    } catch (error) {
      console.log(error);
    }
  };

  const handleResendOtp = async () => {
    try {

      if (!email) return setErrors("Email is missing.");

      const res = await fetch('http://localhost:8000/auth/resendotp', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (!res.ok) {
        if(data.message === 'Invalid request') setErrors('Invalid request')
      }

      toast.success(data.message, {
        duration: 5000,
        position: 'top-center',
      });
    } catch (error) {
      console.log(error);
      setErrors('Something went wrong while resending OTP');
    }
  };

  return (
    <div className="w-full max-w-[1060px] bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_30px_80px_-20px_rgba(100,60,180,0.15)] overflow-hidden flex flex-col md:flex-row border border-white/70">
       <Toaster />
      {/* LEFT: Image Slider */}
      <AuthImageSlider slides={slides} minHeight="620px" />

      {/* RIGHT: Verification Section */}
      <div className="w-full md:w-[54%] p-8 sm:p-10 lg:px-14 lg:py-12 flex flex-col justify-center">
        {/* Mobile Top Bar */}
        <div className="flex md:hidden justify-between items-center mb-8">
          <Link
            href="/"
            className="text-gray-900 text-lg font-black tracking-tight"
          >
            KAZI&apos;S NATION
          </Link>
          <Link
            href="/"
            className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-900 transition-colors"
          >
            ← Back
          </Link>
        </div>

        <div className="max-w-[360px] mx-auto w-full">
          {/* Email Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-100 to-violet-200/60 flex items-center justify-center shadow-[0_8px_30px_rgba(139,92,246,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-violet-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl md:text-[33px] font-black text-gray-900 tracking-tight mb-2">
              Verify Your Email
            </h1>
            <p className="text-[14px] text-gray-400 font-medium leading-relaxed">
              We&apos;ve sent a 4-digit verification code to your email address.
              Please enter it below.
            </p>
          </div>

          <p className="text-[16px] mb-1 rounded-md text-center text-red-500 font-medium leading-relaxed">{errors}</p>

          {/* OTP Form */}
          <form  className="space-y-6">
            {/* OTP Input Component */}
            <AuthOtpInput onChange={(e) => {setOtp(e.target.value),setErrors('')}} length={4} />

            {/* Resend OTP */}
            <div className="text-center flex justify-center items-center gap-2">
              <p className="text-[13px] text-gray-400 font-medium">
                Didn&apos;t receive the code?
              </p>
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-[13px] text-violet-600 font-bold hover:text-violet-700 transition-colors underline underline-offset-4 decoration-violet-300"
              >
                Resend OTP
              </button>
            </div>

            {/* Verify Button */}
            <div className="pt-1">
              <AuthButton onClick={handleOtp} text="Verify Email" type="button" />
            </div>
          </form>

          {/* Bottom Link */}
          <div className="mt-8 text-center">
            <p className="text-[13px] text-gray-400 font-medium">
              Wrong email?{" "}
              <Link
                href="/signup"
                className="text-violet-600 hover:text-violet-700 font-semibold transition-colors underline underline-offset-4 decoration-violet-300"
              >
                Go back to Sign Up
              </Link>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-violet-50/50 border border-violet-100/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <p className="text-[12px] text-gray-400 font-medium leading-relaxed">
              For your security, this code will expire in 10 minutes. If you
              didn&apos;t request this, you can safely ignore this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
