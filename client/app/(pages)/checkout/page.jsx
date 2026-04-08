import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaUndoAlt, FaChevronDown } from 'react-icons/fa';

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 min-h-screen">
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Side */}
        <div className="w-full lg:w-[60%] flex flex-col">
          
          {/* Step 1: Shipping */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-[12px] font-bold">1</div>
              <h2 className="text-xl font-bold text-black tracking-tight">Shipping Information</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full border border-gray-200 bg-[#f9f9f9] rounded px-4 py-3 text-[13px] outline-none focus:border-black transition" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Street Address</label>
                <input type="text" placeholder="123 Gallery Street, Suite 10" className="w-full border border-gray-200 bg-[#f9f9f9] rounded px-4 py-3 text-[13px] outline-none focus:border-black transition" />
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">City</label>
                  <input type="text" placeholder="Metropolis" className="w-full border border-gray-200 bg-[#f9f9f9] rounded px-4 py-3 text-[13px] outline-none focus:border-black transition" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                  <input type="text" placeholder="+1 (555) 000-0000" className="w-full border border-gray-200 bg-[#f9f9f9] rounded px-4 py-3 text-[13px] outline-none focus:border-black transition" />
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Delivery Preferences</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 border-2 border-black rounded-lg p-4 flex justify-between items-center cursor-pointer">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-black">Express Shipping</span>
                      <span className="text-[11px] text-gray-500 mt-1">Delivered in 1-2 business days</span>
                    </div>
                    <span className="text-[13px] font-bold text-black">$25.00</span>
                  </div>
                  
                  <div className="flex-1 border border-transparent bg-[#f9f9f9] rounded-lg p-4 flex justify-between items-center cursor-pointer hover:border-gray-200">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-gray-600">Standard Shipping</span>
                      <span className="text-[11px] text-gray-500 mt-1">Delivered in 3-5 business days</span>
                    </div>
                    <span className="text-[13px] font-bold text-gray-600">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Payment */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-[12px] font-bold">2</div>
              <h2 className="text-xl font-bold text-black tracking-tight">Payment Method</h2>
            </div>

            <div className="flex flex-col gap-4">
              {/* Credit Card Active */}
              <div className="border border-gray-300 rounded-lg p-5">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-[13px] font-bold text-black">Credit or Debit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[9px] font-bold text-gray-500 border border-gray-200 px-2 py-0.5 rounded uppercase tracking-wider">VISA</span>
                    <span className="text-[9px] font-bold text-gray-500 border border-gray-200 px-2 py-0.5 rounded uppercase tracking-wider">MC</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <input type="text" placeholder="Card Number" className="w-full bg-[#f9f9f9] border border-transparent rounded px-4 py-3 text-[13px] outline-none focus:border-gray-300" />
                  <div className="flex gap-4">
                    <input type="text" placeholder="MM/YY" className="flex-1 bg-[#f9f9f9] border border-transparent rounded px-4 py-3 text-[13px] outline-none focus:border-gray-300" />
                    <input type="text" placeholder="CVC" className="flex-1 bg-[#f9f9f9] border border-transparent rounded px-4 py-3 text-[13px] outline-none focus:border-gray-300" />
                  </div>
                </div>
              </div>

              {/* Mobile Banking Inactive */}
              <div className="bg-[#f9f9f9] rounded-lg p-5 flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                  <span className="text-[13px] font-bold text-gray-600">Mobile Banking</span>
                </div>
                <FaChevronDown className="text-gray-400 text-[10px]" />
              </div>

              {/* Cash on Delivery Inactive */}
              <div className="bg-[#f9f9f9] rounded-lg p-5 flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                  <span className="text-[13px] font-bold text-gray-600">Cash on Delivery</span>
                </div>
                <FaChevronDown className="text-gray-400 text-[10px]" />
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-[40%]">
          <div className="bg-[#f7f7f7] p-8 rounded-lg sticky top-24">
            <h2 className="text-lg font-bold text-black tracking-tight mb-8">Order Summary</h2>
            
            <div className="flex flex-col gap-6 mb-8 border-b border-gray-200 pb-8">
              
              <div className="flex gap-4">
                <div className="w-[60px] h-[75px] bg-white rounded flex-shrink-0 relative overflow-hidden">
                  <Image src="/p1.jpg" alt="Item" fill className="object-cover mix-blend-multiply" />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <span className="text-[13px] font-bold text-black mb-1">Signature Wool Blazer</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Size: Medium / Black</span>
                  <span className="text-[10px] text-gray-400">Quantity: 1</span>
                </div>
                <span className="text-[13px] font-bold text-black flex items-center">$450.00</span>
              </div>
              
              <div className="flex gap-4">
                <div className="w-[60px] h-[75px] bg-white rounded flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                  <Image src="/p4.jpg" alt="Item" fill className="object-cover mix-blend-multiply" />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <span className="text-[13px] font-bold text-black mb-1">Heritage Leather Boots</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Size: 42 / Brown</span>
                  <span className="text-[10px] text-gray-400">Quantity: 1</span>
                </div>
                <span className="text-[13px] font-bold text-black flex items-center">$320.00</span>
              </div>

            </div>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between text-[12px] text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold text-black">$770.00</span>
              </div>
              <div className="flex justify-between text-[12px] text-gray-600">
                <span>Express Shipping</span>
                <span className="font-bold text-black">$25.00</span>
              </div>
              <div className="flex justify-between text-[12px] text-gray-600">
                <span>Estimated Tax</span>
                <span className="font-bold text-black">$61.60</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-8 border-t border-gray-200 pt-6">
              <span className="text-[15px] font-bold text-black tracking-wide">Total</span>
              <span className="text-2xl font-bold text-black tracking-tighter">$856.60</span>
            </div>
            
            <button className="w-full bg-black text-white text-[12px] font-bold uppercase py-4 rounded-[4px] tracking-widest hover:bg-gray-800 transition mb-6">
              Place Order
            </button>
            
            <div className="flex justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                <FaShieldAlt className="text-[11px]" /> SSL Secured
              </div>
              <div className="flex items-center gap-2 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                <FaUndoAlt className="text-[11px]" /> 30-Day Returns
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
