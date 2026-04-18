import Image from "next/image";
import React from "react";

const SingleProduct = ({ name, price, src, cngPic }) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500" className="group w-full sm:w-1/2 lg:w-1/4 flex justify-center">
        <div className="w-full max-w-[359px] bg-[#f5f5f5] rounded-2xl overflow-hidden shadow-sm">

          <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] overflow-hidden rounded-t-2xl">
            <Image
              data-aos="zoom-in" data-aos-duration="1000"
              src={src}
              alt="product"
              fill
              className="object-cover transition duration-300 group-hover:opacity-0 group-hover:scale-105"
            />

            {/* Hover Image */}
            <Image
              src={cngPic}
              alt="product hover"
              fill
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          <div className="text-center py-3">
            <h3 data-aos="fade-up" data-aos-duration="1800" className="text-[12px] sm:text-[13px] tracking-wider uppercase font-medium group-hover:font-bold">
              {name}
            </h3>
            <p data-aos="fade-up" data-aos-duration="1900" className="text-[12px] sm:text-[13px] text-gray-600 mt-2">
              Tk {price}
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default SingleProduct;
