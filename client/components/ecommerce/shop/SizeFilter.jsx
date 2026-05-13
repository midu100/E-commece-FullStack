import { sizes } from "./shopData";

const SizeFilter = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className="px-4 py-2 border border-gray-200 rounded-lg text-[12px] font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-200"
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeFilter;
