"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AuthImageSlider({ slides = [], minHeight = "620px" }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "28px", width: "100%", padding: "0 32px" }}>
        <ul className="flex gap-2 justify-start m-0 p-0 list-none">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-6 h-1.5 rounded-full bg-white/30 transition-all duration-300 cursor-pointer hover:bg-white/50" />
    ),
  };

  return (
    <div
      className="hidden md:block md:w-[46%] relative bg-black rounded-[26px] m-3 overflow-hidden"
      style={{ minHeight }}
    >
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative" style={{ height: `calc(${minHeight} - 10px)` }}>
              <Image
                src={slide.image}
                alt={slide.title.replace("\n", " ")}
                fill
                sizes="(max-width: 768px) 100vw, 46vw"
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10"></div>

              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 px-7 pt-6 flex justify-between items-center z-10">
                <Link href="/" className="text-white/90 text-lg font-black tracking-tight">
                  KAZI&apos;S NATION
                </Link>
                <Link
                  href="/"
                  className="text-[10px] font-semibold text-white/80 uppercase tracking-wider hover:text-white px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 transition-all hover:bg-white/20 flex items-center gap-1.5"
                >
                  Back to website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-14 left-8 right-8 text-white z-10">
                <h2 className="text-3xl font-black mb-3 leading-tight tracking-tight whitespace-pre-line">
                  {slide.title}
                </h2>
                <p className="text-white/55 font-medium text-[13px] leading-relaxed max-w-[280px]">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dot Styles */}
      <style jsx global>{`
        .slick-dots li { margin: 0; width: auto; height: auto; }
        .slick-dots li button { padding: 0; }
        .slick-dots li button:before { display: none; }
        .slick-dots li.slick-active div {
          width: 2rem !important;
          background: white !important;
        }
      `}</style>
    </div>
  );
}
