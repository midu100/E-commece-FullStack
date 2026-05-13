"use client";

import { FaTimes } from "react-icons/fa";
import CategoryFilter from "./CategoryFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";

const MobileFilterDrawer = ({ isOpen, onClose, activeCategory, setActiveCategory }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute left-0 top-0 h-full w-[300px] bg-white overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 className="text-[15px] font-bold">Filters</h3>
          <button onClick={onClose}>
            <FaTimes className="text-[18px]" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          {/* Categories */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3">Categories</p>
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={(cat) => { setActiveCategory(cat); onClose(); }}
            />
          </div>

          {/* Sizes */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3">Size</p>
            <SizeFilter />
          </div>

          {/* Colors */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3">Color</p>
            <ColorFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
