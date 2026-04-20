import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f0ff 0%, #e8e0f0 25%, #f0e6ff 50%, #ddd6f3 75%, #e2d1f9 100%)",
      }}
    >
      
      {/* Ambient Floating Gradient Blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[130px] pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, #c4b5fd 0%, transparent 70%)" }}
      ></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] rounded-full blur-[130px] pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
      ></div>
      <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, #f0abfc 0%, transparent 70%)" }}
      ></div>
      <div className="absolute bottom-[20%] left-[15%] w-[20%] h-[20%] rounded-full blur-[90px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
      ></div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10 relative z-10">
        {children}
      </div>

    </div>
  );
}
