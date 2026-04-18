import Link from "next/link";
import Image from "next/image";
import Btn from "@/components/shared/Btn";
import BtnSmall from "@/components/shared/BtnSmall";

export default function ProductPage() {
  return (
    <section className="min-h-screen bg-white font-sans">

      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="py-4">
          <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
            <Link href="#">Home</Link>
            <span>/</span>
            <Link href="#">Mens</Link>
            <span>/</span>
            <span className="text-gray-700">Casual Shirts</span>
          </div>
        </div>

        {/* Main */}
        <div className="flex justify-between">

          {/* LEFT */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/cat1.jpg"
                alt="product"
                width={500}
                height={600}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              {["/cat1.jpg", "/cat1.jpg", "/cat1.jpg"].map((img, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-lg overflow-hidden border hover:border-black cursor-pointer transition"
                >
                  <Image
                    src={img}
                    alt="thumb"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-md space-y-6">

            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-snug mb-[15px]">
              Men's Casual Shirt
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap mb-[15px]">
              <span className="text-[20px] font-bold">Tk 1,099</span>
              <span className="text-gray-400 text-[15px] line-through">Tk 1,380</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                -20%
              </span>
            </div>

            {/* Color */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Select Color</p>
              <div className="flex gap-3">
                <BtnSmall name={'S'} />
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Select Size</p>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 border rounded-md text-sm hover:border-gray-500">
                  S
                </button>
                <button className="px-4 py-2 border rounded-md text-sm bg-black text-white border-black">
                  M
                </button>
                <button className="px-4 py-2 border rounded-md text-sm hover:border-gray-500">
                  L
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <Link href="/cart">
                <Btn Name={'Add to cart'} />
              </Link>

              <Link href="/checkout">
                <Btn Name={'Buy Now'} />
              </Link>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm font-semibold mb-2">Description</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Premium cotton casual shirt for daily wear. Comfortable,
                breathable, and stylish for both office and casual outings.
                Designed with high-quality fabric to ensure long-lasting comfort
                and modern style.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
