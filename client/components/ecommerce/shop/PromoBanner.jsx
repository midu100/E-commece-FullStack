import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[280px]">
      <Image src="/hero8.jpg" alt="promo" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-4 text-center">
        <p className="text-[10px] uppercase tracking-[4px] mb-2">Limited Time</p>
        <h3 className="text-2xl font-bold mb-1">30% OFF</h3>
        <p className="text-[12px] text-gray-300 mb-4">New Collection</p>
        <Link
          href="#"
          className="border border-white text-[11px] uppercase tracking-widest px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
