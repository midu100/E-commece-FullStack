import Image from 'next/image';
import Link from 'next/link';
import { FaTrash, FaPlus, FaMinus, FaTruck, FaShieldAlt } from 'react-icons/fa';

export default function Cart() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 min-h-screen">
      
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-2">Your Selection</h1>
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">Curated Items (3)</span>
          <div className="h-[1px] bg-gray-200 flex-1 max-w-[50px]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side: Cart Items */}
        <div className="w-full lg:w-[65%] flex flex-col gap-8">
          
          {/* Cart Item 1 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-[120px] h-[150px] bg-[#f7f7f7] relative border border-gray-100 flex-shrink-0">
              <Image src="/p1.jpg" alt="Product" fill className="object-cover p-2 mix-blend-multiply" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <Link href="/product/1" className="hover:underline">
                    <h3 className="text-[15px] font-bold text-black tracking-tight">Signature Overcoat</h3>
                </Link>
                <span className="text-[14px] font-bold text-black">$420.00</span>
              </div>
              <p className="text-[12px] text-gray-500 mb-6">Charcoal Grey &bull; Size L</p>
              
              <div className="flex items-center gap-6 mt-auto">
                <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
                  <button className="text-gray-400 hover:text-black p-1"><FaMinus className="text-[10px]" /></button>
                  <span className="text-[13px] font-semibold w-8 text-center">1</span>
                  <button className="text-gray-400 hover:text-black p-1"><FaPlus className="text-[10px]" /></button>
                </div>
                <button className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-black tracking-wider uppercase">
                  <FaTrash className="text-[12px]" /> Remove
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart Item 2 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-[120px] h-[150px] bg-[#f7f7f7] relative border border-gray-100 flex-shrink-0">
              <Image src="/p2.jpg" alt="Product" fill className="object-cover p-2 mix-blend-multiply" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <Link href="/product/1" className="hover:underline">
                    <h3 className="text-[15px] font-bold text-black tracking-tight">Tailored Silk Trousers</h3>
                </Link>
                <span className="text-[14px] font-bold text-black">$280.00</span>
              </div>
              <p className="text-[12px] text-gray-500 mb-6">Midnight Black &bull; Size 32</p>
              
              <div className="flex items-center gap-6 mt-auto">
                <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
                  <button className="text-gray-400 hover:text-black p-1"><FaMinus className="text-[10px]" /></button>
                  <span className="text-[13px] font-semibold w-8 text-center">1</span>
                  <button className="text-gray-400 hover:text-black p-1"><FaPlus className="text-[10px]" /></button>
                </div>
                <button className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-black tracking-wider uppercase">
                  <FaTrash className="text-[12px]" /> Remove
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart Item 3 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-[120px] h-[150px] bg-[#f7f7f7] relative border border-gray-100 flex-shrink-0">
              <Image src="/p3.jpg" alt="Product" fill className="object-cover p-2 mix-blend-multiply" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <Link href="/product/1" className="hover:underline">
                    <h3 className="text-[15px] font-bold text-black tracking-tight">Essential White Tee</h3>
                </Link>
                <span className="text-[14px] font-bold text-black">$85.00</span>
              </div>
              <p className="text-[12px] text-gray-500 mb-6">Optical White &bull; Size M</p>
              
              <div className="flex items-center gap-6 mt-auto">
                <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
                  <button className="text-gray-400 hover:text-black p-1"><FaMinus className="text-[10px]" /></button>
                  <span className="text-[13px] font-semibold w-8 text-center">1</span>
                  <button className="text-gray-400 hover:text-black p-1"><FaPlus className="text-[10px]" /></button>
                </div>
                <button className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-black tracking-wider uppercase">
                  <FaTrash className="text-[12px]" /> Remove
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-[35%]">
          <div className="bg-[#f7f7f7] p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-8">Summary</h2>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between text-[13px] text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold text-black">$785.00</span>
              </div>
              <div className="flex justify-between text-[13px] text-gray-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-[13px] text-gray-600">
                <span>Estimated Tax</span>
                <span className="font-bold text-black">$62.80</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-8 border-t border-gray-200 pt-6">
              <span className="text-[14px] font-bold text-black tracking-wide">Total</span>
              <span className="text-3xl font-bold text-black tracking-tighter">$847.80</span>
            </div>
            
            <Link href="/checkout" className="w-full bg-black text-white text-[11px] font-bold uppercase tracking-widest py-4 flex justify-center rounded-[4px] hover:bg-gray-800 transition mb-8">
              PROCEED TO CHECKOUT
            </Link>

            <div className="flex flex-col gap-4 text-[11px] text-gray-500">
              <div className="flex items-start gap-3">
                <FaTruck className="text-[14px] mt-0.5" />
                <span>Complimentary shipping on orders over $1000</span>
              </div>
              <div className="flex items-start gap-3">
                <FaShieldAlt className="text-[14px] mt-0.5" />
                <span>Secure checkout powered by Kazi Pay</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
