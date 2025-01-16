import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Filter,
  ChevronDown,
  Star,
} from "lucide-react";
import CardProduct from "../../Elements/CardProduct";

const ProductView = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data produk contoh
  const products = [
    {
      id: 1,
      name: "Sneakers Premium",
      price: "Rp 1.299.000",
      category: "shoes",
      rating: 4.5,
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Kemeja Formal Slim Fit",
      price: "Rp 599.000",
      category: "clothing",
      rating: 4.8,
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Tas Kulit Asli",
      price: "Rp 2.499.000",
      category: "bags",
      rating: 4.7,
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Jam Tangan Klasik",
      price: "Rp 1.899.000",
      category: "accessories",
      rating: 4.6,
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "Celana Jeans Premium",
      price: "Rp 899.000",
      category: "clothing",
      rating: 4.4,
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Kacamata Fashion",
      price: "Rp 499.000",
      category: "accessories",
      rating: 4.3,
      image: "/api/placeholder/300/300",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      {/* Main Content */}
      <main className="pt-16 md:pt-20 px-4 md:px-10">
        {/* Category Filter */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-blue-600" />
              <span className="font-medium text-gray-800">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["all", "clothing", "shoes", "bags", "accessories"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category === "all"
                      ? "Semua"
                      : category === "clothing"
                      ? "Pakaian"
                      : category === "shoes"
                      ? "Sepatu"
                      : category === "bags"
                      ? "Tas"
                      : "Aksesoris"}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductView;
