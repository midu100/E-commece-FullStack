"use client";
import React from 'react';

export default function AuthButton({ text, onClick, type = "submit", icon, disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative group flex w-full items-center justify-center gap-3 overflow-hidden 
        rounded-2xl bg-black px-6 py-4 text-[13px] font-bold text-white 
        shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 
        hover:bg-gray-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] 
        active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
        !m-0 border-0 outline-none
      `}
      style={{ boxSizing: 'border-box' }}
    >
      {/* Light sweep animation on hover */}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
      
      <span className="relative z-10 tracking-widest uppercase">{text}</span>
      {icon && <span className="relative z-10">{icon}</span>}
    </button>
  );
}
