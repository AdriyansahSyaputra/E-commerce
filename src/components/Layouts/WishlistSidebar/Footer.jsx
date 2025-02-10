import React from "react";
import PropTypes from "prop-types";

const Footer = ({ clearWishlist }) => {
    return (
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
    );
}

export default Footer;

Footer.propTypes = {
  clearWishlist: PropTypes.func.isRequired,
};