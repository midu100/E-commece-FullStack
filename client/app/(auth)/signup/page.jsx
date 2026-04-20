"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthImageSlider from "@/components/auth/AuthImageSlider";
import AuthFormInput from "@/components/auth/AuthFormInput";
import AuthButton from "@/components/auth/AuthButton";
import AuthSocialSection from "@/components/auth/AuthSocialSection";

// leftside content image/slider
const slides = [
  {
    image: "/cat1.jpg",
    title: "Capturing Moments,\nCreating Memories",
    subtitle: "Create your account and unlock faster checkout, exclusive deals, and personalized recommendations.",
  },
  {
    image: "/hero6.jpg",
    title: "Join The\nCommunity.",
    subtitle: "Be part of a community that celebrates style, quality, and sustainable fashion.",
  },
  {
    image: "/hero3.jpg",
    title: "Your Style,\nYour Story.",
    subtitle: "Express yourself with curated collections designed for the modern trendsetter.",
  },
];

const SignUp = () => {
  const [formData,setFormData] = useState({fullName:'',email:'',password:'',phone:'',address:'',errors:'',success:''})
  

  const handleSubmit =(e)=>{
    e.preventDefault()

    if(!formData.fullName) return setFormData((p)=>({...p,errors:'FullName is required.'}))
    if(!formData.email) return setFormData((p)=>({...p,errors:'Email is required.'}))
    if(!formData.password) return setFormData((p)=>({...p,errors:'Password is required.'}))

    

  }


  return (
    <div className="w-full max-w-[1060px] bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_30px_80px_-20px_rgba(100,60,180,0.15)] overflow-hidden flex flex-col md:flex-row border border-white/70">

      {/* LEFT: Image Slider */}
      <AuthImageSlider slides={slides} minHeight="740px" />

      {/* RIGHT: Form Section */}
      <div className="w-full md:w-[54%] p-8 sm:p-10 lg:px-14 lg:py-10 flex flex-col justify-center">

        {/* Mobile Top Bar */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <Link href="/" className="text-gray-900 text-lg font-black tracking-tight">KAZI&apos;S NATION</Link>
          <Link href="/" className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-900 transition-colors">← Back</Link>
        </div>

        <div className="max-w-[360px] mx-auto w-full">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-[33px] font-black text-gray-900 tracking-tight mb-2">
              Create an account
            </h1>
            <p className="text-[14px] text-gray-400 font-medium leading-relaxed">
              Already have an account?{" "}
              <Link href="/signin" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors underline underline-offset-4 decoration-violet-300">
                Log in
              </Link>
            </p>
          </div>
          <p className="text-[16px] text-center text-red-500 font-medium leading-relaxed">{formData.errors}</p>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,fullName:e.target.value})),setFormData((p)=>({...p,errors:''}))}} label="Full Name" type="text" placeholder="John Doe" name="fullName" />
            <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,email:e.target.value})),setFormData((p)=>({...p,errors:''}))}} label="Email Address" type="email" placeholder="you@example.com" name="email" />

            {/* Phone & Address - Side by Side */}
            <div className="grid grid-cols-2 gap-3">
              <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,password:e.target.value})),setFormData((p)=>({...p,errors:''}))}} label="Password" type="password" placeholder="Enter your password" name="password" />
              <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,phone:e.target.value})),setFormData((p)=>({...p,errors:''}))}} label="Phone" type="tel" placeholder="+880 1XXX..." name="phone" />
            </div>
              <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,address:e.target.value})),setFormData((p)=>({...p,errors:''}))}} label="Address" type="text" placeholder="Dhaka, BD" name="address" />


            {/* Terms */}
            <div className="flex items-start gap-3 pt-0.5">
              <div className="flex items-center h-5 mt-0.5">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-violet-600" />
              </div>
              <label htmlFor="terms" className="text-[12px] text-gray-400 leading-relaxed cursor-pointer font-medium">
                I agree to the{" "}
                <Link href="#" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors underline underline-offset-2 decoration-violet-300">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <div className="pt-1.5">
              <AuthButton onClick={handleSubmit} text="Create account" />
            </div>
          </form>

          {/* Social Section */}
          <AuthSocialSection dividerText="Or register with" />
        </div>
      </div>

    </div>
  );
};

export default SignUp;
