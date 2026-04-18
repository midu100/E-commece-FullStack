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
  MdClose,
  MdBarChart,
  MdLocalOffer,
  MdMail,
  MdHelp,
  MdLightbulbOutline,
  MdPerson,
  MdSettings
} from 'react-icons/md';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <MdDashboard size={20} /> },
    { name: 'Orders', path: '/admin/orders', icon: <MdShoppingCart size={20} />, badge: 16 },
    { name: 'Products', path: '/admin/products', icon: <MdInventory size={20} /> },
    { name: 'Categories', path: '/admin/categories', icon: <MdCategory size={20} /> },
    { name: 'Customers', path: '/admin/users', icon: <MdPeople size={20} /> },
    { name: 'Reports', path: '/admin/reports', icon: <MdBarChart size={20} /> },
    { name: 'Coupons', path: '/admin/coupons', icon: <MdLocalOffer size={20} /> },
    { name: 'Inbox', path: '/admin/inbox', icon: <MdMail size={20} /> },
  ];

  const otherItems = [
    { name: 'Knowledge Base', path: '/admin/knowledge-base', icon: <MdHelp size={20} /> },
    { name: 'Product Updates', path: '/admin/product-updates', icon: <MdLightbulbOutline size={20} /> },
  ];

  const settingItems = [
    { name: 'Personal Settings', path: '/admin/personal-settings', icon: <MdPerson size={20} /> },
    { name: 'Global Settings', path: '/admin/global-settings', icon: <MdSettings size={20} /> },
  ];

  const renderNavLinks = (items) => {
    return items.map((item) => {
      const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
      return (
        <Link
          key={item.name}
          href={item.path}
          onClick={() => setIsOpen(false)}
          className={`relative flex items-center justify-between px-6 py-3 transition-all duration-300 group ${
            isActive 
              ? 'bg-white text-slate-800' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className={`${isActive ? 'text-[#285ccc]' : 'text-slate-400 group-hover:text-white'} transition-colors`}>
              {item.icon}
            </div>
            <span className={`font-medium text-[14px] ${isActive ? 'font-semibold' : ''}`}>{item.name}</span>
          </div>
          {item.badge && (
            <span className="bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {item.badge}
            </span>
          )}
          {isActive && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#285ccc] rounded-r-md"></div>
          )}
        </Link>
      );
    });
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-[105] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed top-0 left-0 h-screen w-64 bg-[#1E222D] text-slate-300 flex flex-col z-[110] transition-transform duration-300 ease-in-out shadow-xl xl:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 mb-2">
          <Link href="/admin/dashboard" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center text-[#285ccc]">
              <MdDashboard size={28} />
            </div>
            <span className="text-[22px] font-bold text-white tracking-wide">
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

        <div className="flex-1 overflow-y-auto pb-6 scrollbar-none flex flex-col gap-6">
          <div className="flex flex-col space-y-0.5">
            <p className="px-6 text-[10px] font-bold text-[#285ccc] uppercase tracking-widest mb-2 mt-4">
              Main Menu
            </p>
            {renderNavLinks([
              { name: 'Dashboard', path: '/admin/dashboard', icon: <MdDashboard size={20} /> },
              { name: 'Products', path: '/admin/products', icon: <MdInventory size={20} /> },
              { name: 'Categories', path: '/admin/categories', icon: <MdCategory size={20} /> },
              { name: 'Orders', path: '/admin/orders', icon: <MdShoppingCart size={20} />, badge: 16 },
              { name: 'Users', path: '/admin/users', icon: <MdPeople size={20} /> },
              { name: 'Finance', path: '/admin/finance', icon: <MdBarChart size={20} /> },
              { name: 'Shipping', path: '/admin/shipping', icon: <MdMail size={20} /> },
              { name: 'Settings', path: '/admin/settings', icon: <MdSettings size={20} /> },
            ])}
          </div>
          
          <div className="px-4 mt-auto pt-6">
             <div className="bg-[#285ccc] rounded-xl p-5 text-white flex flex-col items-start relative overflow-hidden group hover:shadow-lg hover:shadow-[#285ccc]/30 transition-all">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute right-4 bottom-4 text-white/20">
                   <MdHelp size={40} />
                </div>
                <h4 className="font-bold text-sm mb-1 relative z-10">Grow Business</h4>
                <p className="text-xs text-blue-100 mb-4 max-w-[120px] relative z-10">Explore our marketing solutions</p>
                <button className="bg-white text-[#285ccc] text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors relative z-10">
                  Read More
                </button>
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
