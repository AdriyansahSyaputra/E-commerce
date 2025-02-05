import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../Elements/CardProduct";
import { ArrowLeft, ShoppingCart, Search, ChevronDown } from "lucide-react";
import { useWishlist } from "../../../contexts/wishlist/wishlistContext";

const WishlistMobile = () => {
  const { wishlist, clearWishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showStockDropdown, setShowStockDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-lg font-semibold">Your Wishlist</h1>
          </div>
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                {wishlist.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="p-4 bg-white border-b">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search in wishlist..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="p-4 bg-white border-b">
        <div className="flex gap-2 overflow-x-auto">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              Sort <ChevronDown className="w-4 h-4" />
            </button>
            {showSortDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Newest
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Price: Low to High
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Price: High to Low
                </button>
              </div>
            )}
          </div>

          {/* Stock Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white"
              onClick={() => setShowStockDropdown(!showStockDropdown)}
            >
              Stock <ChevronDown className="w-4 h-4" />
            </button>
            {showStockDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  In Stock
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Out of Stock
                </button>
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              Category <ChevronDown className="w-4 h-4" />
            </button>
            {showCategoryDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Electronics
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Fashion
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {wishlist.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 p-4 bg-white border-t">
        <button
          onClick={clearWishlist}
          className="w-full py-3 text-red-500 font-medium border border-red-500 rounded-lg"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
};

export default WishlistMobile;