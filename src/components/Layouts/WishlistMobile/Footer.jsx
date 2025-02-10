import React from "react";
import PropTypes from "prop-types";

const Footer = ({ clearWishlist }) => {
  return (
    <div className="sticky bottom-0 p-4 bg-white border-t">
      <button
        onClick={clearWishlist}
        className="w-full py-3 text-red-500 font-medium border border-red-500 rounded-lg"
      >
        Clear Wishlist
      </button>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  clearWishlist: PropTypes.func.isRequired,
};