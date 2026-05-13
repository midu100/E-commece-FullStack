const PriceFilter = () => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-4 bg-black text-white text-[13px] font-bold uppercase tracking-widest">
        Price Range
      </div>
      <div className="px-5 py-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1">
            <label className="text-[10px] text-gray-400 uppercase tracking-wider">Min</label>
            <input
              type="text"
              placeholder="৳ 0"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-black transition mt-1"
            />
          </div>
          <span className="text-gray-300 mt-4">—</span>
          <div className="flex-1">
            <label className="text-[10px] text-gray-400 uppercase tracking-wider">Max</label>
            <input
              type="text"
              placeholder="৳ 10,000"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-black transition mt-1"
            />
          </div>
        </div>
        <button className="w-full bg-black text-white text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-gray-800 transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
