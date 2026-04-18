"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthButton from "@/components/auth/AuthButton";
import SocialButton from "@/components/auth/SocialButton";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-gray-100 transform transition-all">
      
      {/* LEFT: Form Section */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1 relative bg-white">
        
        <div className="max-w-sm mx-auto w-full">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Welcome Back
            </h1>
            <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
              Enter your details below to sign in to your account and continue your premium shopping experience.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

            <div className="space-y-2">
              <div className="flex justify-between items-center pl-1 pr-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-[11px] font-bold text-blue-600 hover:text-black transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-2xl px-5 py-4 text-[14px] outline-none focus:border-black focus:bg-white transition-all font-medium placeholder:text-gray-400 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <AuthButton text="Sign In" />
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

          {/* Social Login */}
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
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-black border-b border-black pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT: Image / Brading Section */}
      <div className="hidden md:block md:w-1/2 relative order-1 md:order-2 bg-black min-h-[600px]">
        {/* You can replace /hero8.jpg with any sleek fashion image you have */}
        <Image 
          src="/hero8.jpg" 
          alt="Premium Fashion" 
          fill 
          className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-16 left-12 right-12 text-white">
          <div className="w-12 h-1 bg-white mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black mb-4 leading-tight tracking-tight">Elevate Your<br/>Wardrobe Today.</h2>
          <p className="text-white/80 font-medium text-[15px] leading-relaxed max-w-md">
             Experience the pinnacle of fashion. Sign in to access tailored recommendations and exclusive member-only collections.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default SignIn;
