import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100 blur-[120px] pointer-events-none opacity-60"></div>

      {/* Floating Navbar */}
      <nav className="absolute top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-transparent">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-black md:bg-white/60 md:px-5 md:py-2 rounded-2xl md:backdrop-blur-md shadow-sm border border-transparent md:border-white/20 transition-all hover:shadow-md">
          KAZI'S NATION
        </Link>
        <Link href="/" className="text-[11px] font-bold text-black uppercase tracking-widest hover:bg-black hover:text-white px-6 py-3 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl active:scale-95 border border-gray-100">
          Back to Store
        </Link>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-12 relative z-10 pt-24 md:pt-12">
        {children}
      </div>

    </div>
  );
}
