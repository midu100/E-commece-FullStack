"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthButton from "@/components/auth/AuthButton";
import SocialButton from "@/components/auth/SocialButton";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-gray-100 my-8">
      
      {/* LEFT: Image / Branding Section */}
      <div className="hidden md:block md:w-1/2 relative bg-black min-h-[700px]">
        <Image 
          src="/cat1.jpg" 
          alt="Fashion Lifestyle" 
          fill 
          className="object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20"></div>
        
        <div className="absolute bottom-16 left-12 right-12 text-white">
          <div className="w-12 h-1 bg-white mb-6 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <h2 className="text-4xl font-black mb-4 leading-tight tracking-tight">Join Kazi's Nation<br/>Community.</h2>
          <p className="text-white/80 font-medium text-[15px] leading-relaxed max-w-md">
            Create an account to unlock faster checkout, track your orders, and receive early access to our seasonal sales.
          </p>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-500"></div>
            </div>
            <p className="text-[12px] font-bold text-white uppercase tracking-widest">Join 10k+ Members</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Form Section */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
        <div className="max-w-sm mx-auto w-full">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Create Account
            </h1>
            <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
              Sign up in seconds and start building your premium wardrobe.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-2xl px-5 py-4 text-[14px] outline-none focus:border-black focus:bg-white transition-all font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-2xl px-5 py-4 text-[14px] outline-none focus:border-black focus:bg-white transition-all font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-2xl px-5 py-4 text-[14px] outline-none focus:border-black focus:bg-white transition-all font-medium placeholder:text-gray-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                  >
                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

               <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1 whitespace-nowrap">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-2xl px-5 py-4 text-[14px] outline-none focus:border-black focus:bg-white transition-all font-medium placeholder:text-gray-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                  >
                    {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-black focus:ring-black"
                />
              </div>
              <label
                htmlFor="terms"
                className="text-[12px] text-gray-500 leading-relaxed cursor-pointer font-medium"
              >
                I agree to the{" "}
                <Link href="#" className="font-bold text-black border-b border-black pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-bold text-black border-b border-black pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="pt-2">
              <AuthButton text="Create Account" />
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8 relative">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 bg-white">
              or
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200"></div>
          </div>

          <SocialButton 
            provider="Google" 
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            } 
          />

          {/* Footer Link */}
          <p className="text-center text-[13px] text-gray-500 mt-8 font-medium">
            Already have an account?{" "}
            <Link href="/signin" className="font-bold text-black border-b border-black pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
