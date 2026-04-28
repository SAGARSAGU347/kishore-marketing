"use client";

import { useState } from "react";

const categories = ["Biscuits", "Cakes", "Rusk", "Snacks"];

const productsData: any = {
  Biscuits: [
    { name: "Good Day", image: "/GoodDay.png" },
    { name: "Marie Gold", image: "/Marie.png" },
  ],
  Cakes: [
    {
      name: "Gobbles",
      image:
        "/cake.jpg",
    },
  ],
  Rusk: [
    {
      name: "Rusk Pack",
      image:
        "/rusk.jpg",
    },
  ],
  Snacks: [
    {
      name: "Snacks Pack",
      image:
        "/chips.jpg",
    },
  ],
};

export default function ProductsPage() {
  const [active, setActive] = useState("Biscuits");

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-[#f7f1df] to-[#efe7d1] text-center scroll-mt-28"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800">
        Our Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              active === cat
                ? "bg-red-600 text-white shadow"
                : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-6 max-w-6xl mx-auto">
        {productsData[active].map((item: any) => (
          <div
            key={item.name}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            {/* Image section */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-50 p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}