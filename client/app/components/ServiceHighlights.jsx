import React from "react";

const ServiceHighlights = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      {/* 🔥 Top Promotional Video */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <video autoPlay muted loop className="w-full h-[400px] object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Elevate Your Everyday Style
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Discover premium fashion crafted for confidence.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🧥 Features Row */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">
            🚚
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">
            Free delivery on orders above 5000 BDT. Fast and secure nationwide
            shipping.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">
            🔄
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600">
            7-day hassle-free return policy to ensure complete satisfaction.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">
            💎
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            Carefully selected fabrics and modern designs for long-lasting
            comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;

