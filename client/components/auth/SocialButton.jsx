"use client";
import React from 'react';

export default function SocialButton({ provider, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-100 bg-white px-6 py-4 text-[13px] font-bold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-200 active:scale-[0.98] shadow-sm !m-0 outline-none"
      style={{ boxSizing: 'border-box' }}
    >
      {icon}
      <span>Continue with {provider}</span>
    </button>
  );
}
