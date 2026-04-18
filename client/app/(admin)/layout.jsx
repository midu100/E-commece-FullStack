"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { adminApiService } from './services/api';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Minimal light layout theme
  return (
    <div className="fixed inset-0 z-[100] bg-[#FAFAFA] flex overflow-hidden font-sans text-slate-800">
      {/* Sidebar - Desktop & Mobile */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full min-w-0 transition-all duration-300 ml-0 lg:ml-64 relative">
        <div className="absolute inset-0 bg-slate-50/[0.02] pointer-events-none"></div>
        
        {/* Admin Navbar */}
        <AdminNavbar setSidebarOpen={setSidebarOpen} />
        
        {/* Page Content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8 relative z-10 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          <div className="max-w-7xl mx-auto">
            <ApiProvider api={adminApiService}> 
               {children}
            </ApiProvider>
          </div>
        </main>
      </div>
    </div>
  );
}
