import React, { useState } from "react";
import { Heart, Trash2, X } from "lucide-react";
import { useWishlist } from "../../../contexts/wishlist/wishlistContext";
import PropTypes from "prop-types";

const WishlistDesktop = ({ isWishlistOpen, setIsWishlistOpen }) => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  return (
    <>
      <aside
        className={`bg-white shadow-xl fixed top-0 right-0 w-96 h-full z-30 ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="text-indigo-600 w-5 h-5" />
                <h1 className="text-xl font-semibold text-gray-800">
                  Your Wishlist
                </h1>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-2 py-2">
            <div className="space-y-4">
              {/* Cart Item */}
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex gap-4 relative">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                      <img
                        src="/img/category/laptop.png"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-medium mb-1">
                        {item.name}
                      </h3>
                      <p className="text-lg font-semibold text-indigo-600">
                        {(item.price || 0).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>

                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-0 right-0 p-2 hover:bg-red-50 rounded-full group transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-6 py-4 bg-white">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={clearWishlist}
                className="px-4 py-2.5 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-medium transition-colors duration-200"
              >
                Clear Wishlist
              </button>
              <button className="px-4 py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition-colors duration-200">
                View Wishlist
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isWishlistOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setIsWishlistOpen(false)} // Menutup cart ketika klik overlay
        />
      )}
    </>
  );
};

export default WishlistDesktop;

WishlistDesktop.propTypes = {
  isWishlistOpen: PropTypes.bool.isRequired,
  setIsWishlistOpen: PropTypes.func.isRequired,
};