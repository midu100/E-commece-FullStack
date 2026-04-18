"use client"

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="mt-4 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto rounded-[30px] overflow-hidden">
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">

            {/* Video */}
            <video
              src="/HEROV.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/shop"
                className="border border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-[14px] md:text-[16px] hover:bg-white hover:text-black transition"
              >
                Shop All
              </Link>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
