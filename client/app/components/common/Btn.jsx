'use client'
import React from "react";

const Btn = ({Name,onClick}) => {
  return (
    <>
      <button onClick={onClick} className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
        {Name}
      </button>
    </>
  );
};

export default Btn;
