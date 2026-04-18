import Image from "next/image";
import React from "react";

const SingleFeature = ({ name, src, price }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
      <div className="w-full max-w-[359px] h-auto bg-[#f1f0f0] rounded-xl shadow-md overflow-hidden group">

        {/* Image */}
        <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[470px] overflow-hidden">
          <Image
            data-aos="zoom-in" data-aos-duration="1000"
            src={src}
            alt="product"
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />

          {/* Add To Cart */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition duration-300 p-3 text-center">
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="text-center py-4 px-3">
          <h3 data-aos="fade-up" data-aos-duration="1800" className="text-[13px] sm:text-[14px] font-medium mb-2">
            {name}
          </h3>
          <p data-aos="fade-up" data-aos-duration="1900" className="text-gray-600 text-sm">Tk {price}</p>
        </div>

      </div>
    </div>
  );
};

export default SingleFeature;
