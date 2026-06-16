import Image from "next/image";
import Link from "next/link";

const SuggestionBox = ({ products = [], searchQuery = "", onClose }) => {

  if (products.length === 0) return null;

  return (
    <div className="suggestion-box">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-gray-400">
          Products
        </h4>
        <Link
          href={`/shop?search=${searchQuery}`}
          onClick={onClose}
          className="text-[11px] text-orange-500 hover:text-orange-600 font-semibold transition-colors"
        >
          View all results ›
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-3">
        {products.slice(0, 6).map((product, i) => (
          <Link
            key={product._id || i}
            href={`/product/${product.slug}`}
            onClick={onClose}
            className="suggestion-product-card"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-2">
              <Image
                src={product.thumbnail}
                alt={product.title || "product"}
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>

            <h5 className="text-[11px] font-medium text-gray-800 leading-tight line-clamp-2 mb-1">
              {product.title}
            </h5>

            <p className="text-[12px] font-bold text-black">
              ৳ {product.price?.toLocaleString()}
            </p>

            {product.discountPercentage > 0 && (
              <p className="text-[10px] text-green-600 font-semibold">
                {product.discountPercentage}% OFF
              </p>
            )}
          </Link>
        ))}
      </div>

    </div>
  );
};

export default SuggestionBox;
