import { colors } from "./shopData";

const ColorFilter = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <button
          key={color.name}
          title={color.name}
          className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-black transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  );
};

export default ColorFilter;
