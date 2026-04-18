"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, 
  MdInventory, 
  MdCategory, 
  MdShoppingCart, 
  MdPeople, 
  MdLogout,
  MdClose,
  MdAccountBalanceWallet,
  MdLocalShipping,
  MdSettings
} from 'react-icons/md';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <MdDashboard size={22} /> },
    { name: 'Products', path: '/admin/products', icon: <MdInventory size={22} /> },
    { name: 'Categories', path: '/admin/categories', icon: <MdCategory size={22} /> },
    { name: 'Orders', path: '/admin/orders', icon: <MdShoppingCart size={22} /> },
    { name: 'Users', path: '/admin/users', icon: <MdPeople size={22} /> },
    { name: 'Finance', path: '/admin/finance', icon: <MdAccountBalanceWallet size={22} /> },
    { name: 'Shipping', path: '/admin/shipping', icon: <MdLocalShipping size={22} /> },
    { name: 'Settings', path: '/admin/settings', icon: <MdSettings size={22} /> },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-[105] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-64 bg-[#0b1120] text-slate-300 flex flex-col z-[110] transition-transform duration-300 ease-in-out shadow-2xl xl:translate-x-0 outline outline-1 outline-blue-500/10 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-blue-500/10 bg-[#0f172a]/50">
          <Link href="/admin/dashboard" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Admin Panel
            </span>
          </Link>
          <button 
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 scrollbar-none">
          <p className="px-4 text-[10px] font-bold text-blue-400/60 uppercase tracking-widest mb-3">
            Main Menu
          </p>
          {menuItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-blue-600 outline outline-1 outline-blue-400/30 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-blue-300'
                }`}
              >
                <div className={`${isActive ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'} transition-colors`}>
                  {item.icon}
                </div>
                <span className="font-semibold text-[13px] tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-blue-500/10 bg-[#0f172a]/30">
          <Link 
            href="/"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 group"
          >
            <MdLogout size={22} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-[13px] tracking-wide">Return to Store</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
