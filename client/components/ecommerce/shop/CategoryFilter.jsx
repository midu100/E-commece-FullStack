import { categories } from "./shopData";
import Link from "next/link";

const CategoryFilter = () => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-4 bg-black text-white text-[13px] font-bold uppercase tracking-widest">
        Categories
      </div>
      <div className="px-5 py-4 space-y-1">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href="#"
            className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-200"
          >
            <span>{cat.name}</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
              {cat.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
