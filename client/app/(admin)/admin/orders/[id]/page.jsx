"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { MdArrowBack, MdCheckCircle, MdLocalShipping, MdInventory, MdCancel, MdCached, MdPlayArrow } from 'react-icons/md';
import { useGetOrderDetailsQuery, useUpdateOrderStatusMutation } from '@/app/(admin)/services/api';
import toast, { Toaster } from 'react-hot-toast';

const OrderDetails = ({ params }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const { data, isLoading, isError } = useGetOrderDetailsQuery(id);
  const [updateStatus, { isLoading: isUpdating }] = useUpdateOrderStatusMutation();

  const order = data?.data;

  const handleUpdateStatus = async (statusValue) => {
    try {
      const res = await updateStatus({ id, status: statusValue }).unwrap();
      toast.success(res?.message || `Order status updated to ${statusValue}`, {
        position: 'top-center'
      });
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update order status');
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <span className="text-sm font-semibold tracking-wide text-slate-500">Loading Order Details...</span>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32 text-red-500">
        <p className="font-semibold text-lg">Failed to load order details.</p>
        <Link href="/admin/orders" className="text-blue-500 hover:underline">
          Return to Orders list
        </Link>
      </div>
    );
  }

  const getTimelineSteps = () => {
    const status = order.status;
    return [
      { 
        id: 1, 
        label: 'Order Placed', 
        date: new Date(order.createdAt).toLocaleString(), 
        icon: <MdInventory size={20} />, 
        completed: true 
      },
      { 
        id: 2, 
        label: 'Processing', 
        date: status !== 'Pending' ? new Date(order.updatedAt).toLocaleString() : 'Pending Confirmation', 
        icon: <MdCached size={20} />, 
        completed: status !== 'Pending' 
      },
      { 
        id: 3, 
        label: 'Shipped', 
        date: (status === 'Shipped' || status === 'Delivered') ? new Date(order.updatedAt).toLocaleString() : 'Estimated soon', 
        icon: <MdLocalShipping size={20} />, 
        completed: status === 'Shipped' || status === 'Delivered' 
      },
      { 
        id: 4, 
        label: 'Delivered', 
        date: order.deliveredAt ? new Date(order.deliveredAt).toLocaleString() : 'Awaiting delivery', 
        icon: <MdCheckCircle size={20} />, 
        completed: status === 'Delivered' 
      },
    ];
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 isolate font-sans">
      <Toaster />
      <div className="flex items-center justify-between gap-4 bg-[#0f172a] p-6 rounded-2xl shadow-xl border border-slate-800">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/orders"
            className="p-3 border border-slate-800 bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-inner text-slate-400 group"
          >
            <MdArrowBack size={24} className="group-hover:-translate-x-1 transition-transform text-slate-300" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide leading-tight">Order #{order.orderNumber || order._id.slice(-8).toUpperCase()}</h2>
            <p className="text-[13px] font-medium text-slate-400 mt-1 uppercase tracking-widest">
              <span className="text-blue-400 font-bold">{order.status}</span> • {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0f172a] p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>
            <h3 className="text-lg font-bold text-white mb-8 tracking-wide uppercase drop-shadow">Order Timeline</h3>
            <div className="relative pl-6 space-y-8 z-10">
              <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-slate-855" style={{ backgroundColor: '#1e293b' }}></div>
              {getTimelineSteps().map((step, index) => (
                <div key={step.id} className="relative flex items-start gap-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 shadow-lg ${
                    step.completed ? 'bg-blue-600 text-white shadow-blue-500/30 ring-4 ring-[#0f172a]' : 'bg-slate-900 text-slate-500 border-2 border-slate-700 ring-4 ring-[#0f172a]'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-[15px] tracking-wide ${step.completed ? 'text-blue-300' : 'text-slate-500'}`}>{step.label}</h4>
                    <p className="text-[12px] text-slate-500 font-medium uppercase tracking-wider">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
              <div className="mt-12 p-6 bg-slate-900/80 border border-slate-800 rounded-xl relative z-10">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Update Order State</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-md uppercase">Action Required</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {order.status === 'Pending' && (
                    <button 
                      disabled={isUpdating}
                      onClick={() => handleUpdateStatus('Processing')}
                      className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold uppercase tracking-widest text-[11px] py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 duration-250"
                    >
                      <MdCached size={18} className="animate-spin" style={{ animationDuration: '3s' }} /> Confirm & Process Order
                    </button>
                  )}
                  {order.status === 'Processing' && (
                    <button 
                      disabled={isUpdating}
                      onClick={() => handleUpdateStatus('Shipped')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold uppercase tracking-widest text-[11px] py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 duration-250"
                    >
                      <MdLocalShipping size={18} /> Ship Package
                    </button>
                  )}
                  {order.status === 'Shipped' && (
                    <button 
                      disabled={isUpdating}
                      onClick={() => handleUpdateStatus('Delivered')}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold uppercase tracking-widest text-[11px] py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 duration-250"
                    >
                      <MdCheckCircle size={18} /> Mark as Delivered
                    </button>
                  )}
                  <button 
                    disabled={isUpdating}
                    onClick={() => handleUpdateStatus('Cancelled')}
                    className="sm:w-1/3 bg-transparent hover:bg-red-500/10 text-red-500 border border-red-500/20 py-3.5 px-6 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 duration-250"
                  >
                    <MdCancel size={18} /> Cancel Order
                  </button>
                </div>
              </div>
            )}
            
            {order.status === 'Delivered' && (
              <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
                <p className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Order Completed Successfully</p>
              </div>
            )}
 
            {order.status === 'Cancelled' && (
              <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                <p className="text-red-400 font-bold uppercase tracking-wider text-sm">Order Cancelled</p>
              </div>
            )}
          </div>

          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Ordered Items</h3>
            <div className="space-y-4">
              {order.items?.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 border border-slate-700/50 rounded-xl bg-[#0f172a] hover:border-blue-500/30 transition-colors group">
                  <div className="flex items-center gap-5">
                    <img 
                      src={item.product?.thumbnail || "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"} 
                      alt={item.product?.title || "Product"} 
                      className="w-16 h-16 rounded-lg object-cover border border-slate-700" 
                    />
                    <div>
                      <h4 className="font-bold text-slate-200 tracking-wide text-[14px]">{item.product?.title || "Unknown Product"}</h4>
                      <p className="text-[12px] text-slate-400 mt-1 uppercase tracking-wider">৳{item.product?.price?.toLocaleString() || "—"} x {item.quantity}</p>
                      <span className="text-[10px] text-slate-500">SKU: {item.sku}</span>
                    </div>
                  </div>
                  <p className="font-bold text-blue-400 text-lg">৳{item.subTotal?.toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 pt-6 border-t border-slate-700/50 text-[13px] font-bold tracking-wider">
              <div className="flex justify-between text-slate-400"><p>Subtotal</p><p>৳{(order.totalPrice - order.deliveryCharge)?.toLocaleString()}</p></div>
              <div className="flex justify-between text-slate-400"><p>Shipping Charges ({order.insideDhaka ? "Inside Dhaka" : "Outside Dhaka"})</p><p>৳{order.deliveryCharge}</p></div>
              <div className="flex justify-between text-blue-300 text-xl font-black mt-4 border-t border-slate-700 pt-4"><p>Total</p><p>৳{order.totalPrice?.toLocaleString()}</p></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Customer Details</h3>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Name</p>
                <p className="font-bold text-slate-200 text-[15px] mt-1">{order.user?.fullName || "Guest Customer"}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Email</p>
                <p className="font-bold text-slate-300 text-[13px] mt-1">{order.user?.email || "—"}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Phone</p>
                <p className="font-bold text-blue-400 text-[15px] mt-1">{order.user?.phone || order.phone || "—"}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Delivery Address</p>
                <p className="text-slate-300 font-medium leading-relaxed mt-1">{order.shippingAddress || "—"}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-700/50">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Delivery Zone Info</p>
                <p className="text-amber-500/90 font-bold mt-2 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20 text-xs">
                  {order.insideDhaka ? "Inside Dhaka Zone" : "Outside Dhaka Zone"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Payment Status</h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border flex items-center justify-between ${
                order.payment?.status === 'Paid' 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                  : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
              }`}>
                <span className="font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                  {order.payment?.status || "Pending"} via {order.payment?.method || "cash"}
                </span>
                {order.payment?.status === 'Paid' && <MdCheckCircle className="text-emerald-500" size={20} />}
              </div>
              {order.payment?.paymentId && (
                <div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Transaction ID</p>
                  <p className="font-bold text-slate-200 font-mono tracking-wider mt-1 text-[13px]">{order.payment.paymentId}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

