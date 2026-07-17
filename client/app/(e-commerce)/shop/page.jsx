import ShopHero from "@/components/ecommerce/shop/ShopHero";
import ShopSidebar from "@/components/ecommerce/shop/ShopSidebar";
import ShopProductsList from "@/components/ecommerce/shop/ShopProductsList";
import { apiClient } from "@/lib/apiClient";

export default async function ShopPage({searchParams}) {
  const categoryRes = await apiClient.get(`/category/allcategories`,{
      next :{
        revalidate : 60 * 5
      }
  })
  const categories = categoryRes?.categories
  const {category,search} = await searchParams

  return (
    <section className="min-h-screen bg-white font-sans">

      {/* Hero Banner */}
      <ShopHero />

      {/* Top Bar */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="w-1"></div>
          <select className="border border-gray-300 text-[13px] px-4 py-2 rounded-full outline-none bg-white cursor-pointer hover:border-black transition">
            <option>Sort by: Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">

          {/* Left Sidebar */}
          <ShopSidebar cateName={categories} />

          {/* Right: Products Grid & Pagination */}
          <ShopProductsList category={category} search={search} />

        </div>
      </div>
    </section>
  );
}
