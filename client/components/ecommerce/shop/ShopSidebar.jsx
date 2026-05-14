import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import PromoBanner from "./PromoBanner";
import { categories } from "./shopData";
import Link from "next/link";

const ShopSidebar = ({cateName,cateCount}) => {
  console.log('cateName= ',cateName)
  return (
    <aside className="hidden lg:block w-[260px] flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 bg-black text-white text-[13px] font-bold uppercase tracking-widest">
                Categories
              </div>
              <div className="px-5 py-4 space-y-1">
                <Link href="/shop" className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-200">
                    All 

                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {cateCount}
                    </span>
                </Link>
                {cateName?.map((cat) => (
                  
                  <Link
                    key={cat.name}
                    href={`/shop?category=${(cat.name)}`}
                    className="w-full capitalize flex items-center justify-between py-2.5 px-3 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-200"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {cateCount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
        <PriceFilter />
        <PromoBanner />
      </div>
    </aside>
  );
};

export default ShopSidebar;
