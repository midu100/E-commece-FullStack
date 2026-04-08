import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCategory = ({ name, src, href }) => {
  return (
    <>
      <div className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-2xl transition-all duration-700 hover:rounded-[120px]">
        <Image
          src={src}
          alt="category"
          width={500}
          height={600}
          className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] object-cover transition-all duration-300 hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={href}
            className="border border-white backdrop-blur-xl hover:bg-black duration-[.4s] font-bold text-[#fce2de] px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-[14px] sm:text-[15px] md:text-[16px]"
          >
            {name}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;