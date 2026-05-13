"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 bg-black text-white text-[13px] font-bold uppercase tracking-widest"
      >
        {title}
        {isOpen ? (
          <FaChevronUp className="text-[10px]" />
        ) : (
          <FaChevronDown className="text-[10px]" />
        )}
      </button>
      {isOpen && <div className="px-5 py-4">{children}</div>}
    </div>
  );
};

export default FilterSection;
