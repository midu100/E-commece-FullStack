import React, { useState, useRef, useEffect } from "react";

export default function AuthOtpInput({ length = 4, onChange }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (onChange) {
      onChange({ target: { value: newOtp.join("") } });
    }

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (new RegExp(`^\\d{${length}}$`).test(pasteData)) {
      const digits = pasteData.split("");
      setOtp(digits);
      if (onChange) {
        onChange({ target: { value: pasteData } });
      }
      inputRefs.current[length - 1]?.focus();
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-0.5 block text-center">
        Verification Code
      </label>

      {/* Input Boxes */}
      <div className="flex justify-center gap-3 sm:gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className={`w-16 h-[72px] text-center text-2xl font-black text-gray-800 border-2 rounded-2xl outline-none bg-white/50 backdrop-blur-sm transition-all duration-300 ease-out placeholder:text-gray-200 ${
              digit
                ? "border-violet-400 bg-violet-50/50 shadow-[0_0_0_3px_rgba(139,92,246,0.12)] scale-[1.02]"
                : "border-gray-200/80 hover:border-violet-300"
            } focus:border-violet-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(139,92,246,0.15)] focus:scale-105`}
            style={{ caretColor: "#8b5cf6" }}
          />
        ))}
      </div>
    </div>
  );
}
