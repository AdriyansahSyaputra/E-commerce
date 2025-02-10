import React from "react";
import { Heart, X } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ setIsWishlistOpen }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="text-indigo-600 w-5 h-5" />
          <h1 className="text-xl font-semibold text-gray-800">Your Wishlist</h1>
        </div>
        <button
          onClick={() => setIsWishlistOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  setIsWishlistOpen: PropTypes.func.isRequired,
};