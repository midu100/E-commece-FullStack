"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthImageSlider from "@/components/auth/AuthImageSlider";
import AuthFormInput from "@/components/auth/AuthFormInput";
import AuthButton from "@/components/auth/AuthButton";
import AuthSocialSection from "@/components/auth/AuthSocialSection";
import toast, { Toaster } from 'react-hot-toast';
import { redirect } from "next/navigation";


const slides = [
  {
    image: "/hero8.jpg",
    title: "Elevate Your\nWardrobe Today.",
    subtitle: "Experience the pinnacle of fashion with tailored recommendations and exclusive collections.",
  },
  {
    image: "/hero7.jpg",
    title: "Discover New\nCollections.",
    subtitle: "Explore curated styles handpicked by our fashion experts for every season.",
  },
  {
    image: "/hero4.jpg",
    title: "Style Meets\nComfort.",
    subtitle: "Premium quality meets everyday comfort. Dress to impress, effortlessly.",
  },
];

const SignIn = () => {
  const [formData,setFormData] = useState({email:'',password:''})
  const [errors, setErrors] = useState('');

  const handleLogin = async(e)=>{
    e.preventDefault()
    try {
       if(!formData.email) return setErrors('email is required.')
       if(!formData.password) return setErrors('Password is required.')

       const res = await fetch('http://localhost:8000/auth/signin',{
        method : 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
       })

       const data = await res.json()
       if(!res.ok){
        if(data.message === 'Email is required' || data.message === 'Your email is not verify,please verfy your email.') setErrors(data.message)
        if(data.message ==='Password is required' || data.message === 'Incorrect password') setErrors(data.message)
        if(data.message === 'User Not Registered') setErrors(data.message)

        return

       }
       console.log(data)
       toast.success(data.message,{
        duration: 5000,
       position: 'top-center',
      });

      setTimeout(()=>{
        redirect('/')
      },3000)


    } 
    catch (error) {
       console.log(error)  
    }



  }


  return (
    <div className="w-full max-w-[1060px] bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_30px_80px_-20px_rgba(100,60,180,0.15)] overflow-hidden flex flex-col md:flex-row border border-white/70">
      <Toaster />
      {/* LEFT: Image Slider */}
      <AuthImageSlider slides={slides} minHeight="620px" />

      {/* RIGHT: Form Section */}
      <div className="w-full md:w-[54%] p-8 sm:p-10 lg:px-14 lg:py-12 flex flex-col justify-center">

        {/* Mobile Top Bar */}
        <div className="flex md:hidden justify-between items-center mb-8">
          <Link href="/" className="text-gray-900 text-lg font-black tracking-tight">KAZI&apos;S NATION</Link>
          <Link href="/" className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-900 transition-colors">← Back</Link>
        </div>

        <div className="max-w-[360px] mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-[33px] font-black text-gray-900 tracking-tight mb-2">
              Welcome Back
            </h1>
            <p className="text-[14px] text-gray-400 font-medium leading-relaxed">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors underline underline-offset-4 decoration-violet-300">
                Sign up
              </Link>
            </p>
          </div>
           <p className="text-[16px] bg-amber-300 rounded-md text-center text-red-500 font-medium leading-relaxed">{errors}</p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,email:e.target.value})),setErrors('')}} label="Email Address" type="email" placeholder="you@example.com" name="email" />
            <AuthFormInput onChange={(e)=>{setFormData((p)=>({...p,password:e.target.value})),setErrors('')}} label="Password" type="password" placeholder="Enter your password" name="password" />

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center pt-0.5">
              <div className="flex items-center gap-2.5">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-violet-600" />
                <label htmlFor="remember" className="text-[12px] text-gray-400 font-medium cursor-pointer">Remember me</label>
              </div>
              <Link href="#" className="text-[12px] font-semibold text-violet-600 hover:text-violet-700 transition-colors">
                Forgot Password?
              </Link>
            </div>

            <div className="pt-2">
              <AuthButton text="Sign In" />
            </div>
          </form>

          {/* Social Section */}
          <AuthSocialSection dividerText="Or continue with" />
        </div>
      </div>

    </div>
  );
};

export default SignIn;
