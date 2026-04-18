"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { MdArrowBack, MdCheckCircle, MdLocalShipping, MdInventory, MdCancel } from 'react-icons/md';

const OrderDetails = ({ params }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const currentStatus = 'Shipped'; // Example static status

  const getTimelineSteps = () => {
    return [
      { id: 1, label: 'Order Placed', date: 'Oct 15, 2023, 10:30 AM', icon: <MdInventory size={20} />, completed: true },
      { id: 2, label: 'Processing', date: 'Oct 15, 2023, 02:15 PM', icon: <MdCheckCircle size={20} />, completed: true },
      { id: 3, label: 'Shipped', date: 'Oct 16, 2023, 09:00 AM', icon: <MdLocalShipping size={20} />, completed: true },
      { id: 4, label: 'Delivered', date: 'Estimated: Oct 18, 2023', icon: <MdCheckCircle size={20} />, completed: false },
    ];
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 isolate">
      <div className="flex items-center justify-between gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/orders"
            className="p-3 border border-slate-700/50 bg-[#0f172a] rounded-xl hover:bg-slate-800 transition-colors shadow-inner text-slate-400 group"
          >
            <MdArrowBack size={24} className="group-hover:-translate-x-1 transition-transform text-slate-300" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide leading-tight">Order #{id}</h2>
            <p className="text-[13px] font-medium text-slate-400 mt-1 uppercase tracking-widest"><span className="text-blue-400 font-bold">Shipped</span> • Oct 15, 2023</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>
            <h3 className="text-lg font-bold text-white mb-8 tracking-wide uppercase drop-shadow">Order Timeline</h3>
            <div className="relative pl-6 space-y-8 z-10">
              <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-slate-700"></div>
              {getTimelineSteps().map((step, index) => (
                <div key={step.id} className="relative flex items-start gap-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 shadow-lg ${
                    step.completed ? 'bg-blue-600 text-white shadow-blue-500/30 ring-4 ring-[#1e293b]' : 'bg-slate-800 text-slate-500 border-2 border-slate-600 ring-4 ring-[#1e293b]'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-[15px] tracking-wide ${step.completed ? 'text-blue-300' : 'text-slate-400'}`}>{step.label}</h4>
                    <p className="text-[12px] text-slate-500 font-medium uppercase tracking-wider">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex gap-4 pt-8 border-t border-slate-700/50 relative z-10">
              <button className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 py-3 rounded-xl font-bold uppercase tracking-widest text-[12px] transition-colors flex items-center justify-center gap-2">
                <MdCheckCircle size={18} /> Mark as Delivered
              </button>
              <button className="flex-1 bg-red-600/20 hover:bg-red-600/30 text-red-500 border border-red-500/30 py-3 rounded-xl font-bold uppercase tracking-widest text-[12px] transition-colors flex items-center justify-center gap-2">
                <MdCancel size={18} /> Cancel Order
              </button>
            </div>
          </div>

          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Ordered Items</h3>
            <div className="space-y-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex justify-between items-center p-4 border border-slate-700/50 rounded-xl bg-[#0f172a] hover:border-blue-500/30 transition-colors group">
                  <div className="flex items-center gap-5">
                    <img src="https://via.placeholder.com/60" alt="Product" className="w-16 h-16 rounded-lg object-cover border border-slate-700" />
                    <div>
                      <h4 className="font-bold text-slate-200 tracking-wide text-[14px]">Wireless Headphones Pro</h4>
                      <p className="text-[12px] text-slate-400 mt-1 uppercase tracking-wider">৳9,000 x 2</p>
                    </div>
                  </div>
                  <p className="font-bold text-blue-400 text-lg">৳18,000</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 pt-6 border-t border-slate-700/50 text-[13px] font-bold tracking-wider">
              <div className="flex justify-between text-slate-400"><p>Subtotal</p><p>৳36,000</p></div>
              <div className="flex justify-between text-slate-400"><p>Shipping Charges (Inside Dhaka)</p><p>৳60</p></div>
              <div className="flex justify-between text-blue-300 text-xl font-black mt-4 border-t border-slate-700 pt-4"><p>Total</p><p>৳36,060</p></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Customer Details</h3>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Name</p>
                <p className="font-bold text-slate-200 text-[15px] mt-1">Charlie Puth</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Phone</p>
                <p className="font-bold text-blue-400 text-[15px] mt-1">+880 1711-XXXXXX</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Delivery Address</p>
                <p className="text-slate-300 font-medium leading-relaxed mt-1">House 12, Road 4, Dhanmondi, Dhaka (Inside Dhaka)</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-700/50">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Delivery Zone Info</p>
                <p className="text-amber-500/90 font-bold mt-2 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20 text-xs">Standard Delivery (1-2 Days)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Payment Status</h3>
            <div className="space-y-4">
              <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1">Paid via bKash</span>
                <MdCheckCircle className="text-emerald-500" size={20} />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Trx ID</p>
                <p className="font-bold text-slate-200 font-mono tracking-wider mt-1 text-[13px]">8J3KW92MNX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
