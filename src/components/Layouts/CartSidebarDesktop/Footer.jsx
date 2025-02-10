import React from "react";
import PropTypes from "prop-types";

const Footer = ({ totalPrice, clearCart }) => {
  return (
    <>
      <div className="border-t border-gray-100 px-6 py-4 bg-white">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-600">Total</span>
          <span className="text-lg font-semibold text-gray-900">
            {isNaN(totalPrice)
              ? "$0.00"
              : totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={clearCart}
            className="px-4 py-2.5 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-medium transition-colors duration-200"
          >
            Clear Cart
          </button>
          <button className="px-4 py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition-colors duration-200">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;

Footer.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
};