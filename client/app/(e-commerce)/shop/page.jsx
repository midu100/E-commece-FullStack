import SingleProduct from "@/components/shared/SingleProduct";
import ShopHero from "@/components/ecommerce/shop/ShopHero";
import ShopSidebar from "@/components/ecommerce/shop/ShopSidebar";
import { products } from "@/components/ecommerce/shop/shopData";
import { apiClient } from "@/lib/apiClient";

export default async function ShopPage({searchParams}) {
  const categoryRes = await apiClient.get(`/category/allcategories`,{
      next :{
        revalidate : 60 * 5
      }
  })
  const categories = categoryRes?.categories
  const {category} = await searchParams
  const res = await apiClient.get(`/product/allproducts${category ? `?category=${category}` : ""}`,{
      next :{
        revalidate : 60 * 5
      }
  })

  
    // const data = await res.json()
  
    console.log(category)
  return (
    <section className="min-h-screen bg-white font-sans">

      {/* Hero Banner */}
      <ShopHero />

      {/* Top Bar */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[13px] text-gray-500">
            Showing <span className="font-bold text-black">{products.length}</span> results
          </p>
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
          <ShopSidebar cateHref={''} cateName={categories} />

          {/* Right: Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
              {res?.productList.map((product,i) => (
                <SingleProduct
                  key={i}
                  name={product.title}
                  price={product.price}
                  src={product.thumbnail}
                  cngPic={product.images[0]}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-14">
              <button className="border-2 border-black text-black text-[11px] font-bold uppercase tracking-[3px] px-10 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                Load More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
