import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white mt-16">

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-[40px] sm:py-[50px] lg:py-[60px]">

          {/* Top Links */}
          <div className="flex flex-wrap justify-center gap-[15px] sm:gap-[25px] lg:gap-[30px] text-[13px] sm:text-[14px] mb-[40px] lg:mb-[50px] text-center">
            <Link href="#" className="font-sans font-medium">Contact Information</Link>
            <Link href="#" className="font-sans font-medium">Privacy Policy</Link>
            <Link href="#" className="font-sans font-medium">Refund Policy</Link>
            <Link href="#" className="font-sans font-medium">Shipping Policy</Link>
            <Link href="#" className="font-sans font-medium">Terms of Service</Link>
            <Link href="#" className="font-sans font-medium">Shop Locator</Link>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-[30px]">

            {/* Subscribe */}
            <div className="w-full md:w-auto text-center md:text-left">
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[15px] lg:mb-[20px]">
                Subscribe to our emails
              </h3>

              <div className="flex border border-gray-600 w-[90%] sm:w-[350px] mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent px-[15px] py-[10px] w-full outline-none text-[14px]"
                />
                <button className="px-[15px] sm:px-[20px]">
                  →
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-[20px] text-[18px] sm:text-[20px]">
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaTiktok /></Link>
            </div>

          </div>

        </div>

        {/* Bottom Part */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-[15px] sm:py-[20px] flex flex-col sm:flex-row justify-between items-center text-[13px] sm:text-[14px] text-gray-400 gap-[10px]">
            <p className="text-[14px] sm:text-[16px] font-sans font-bold text-center sm:text-left">
              © 2026 Kazi's Nation
            </p>
            <p className="text-[14px] sm:text-[16px] font-sans font-bold text-center sm:text-right">
              Developed by Mridul
            </p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;