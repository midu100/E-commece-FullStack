import Image from "next/image";
import Link from "next/link";

const ShopHero = () => {
  return (
    <div className="relative h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden mx-4 md:mx-6 lg:mx-8 mt-4 rounded-[30px]">
      <Image
        src="/cat1.jpg"
        alt="Shop Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-3">
          Shop All
        </h1>
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-white">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
