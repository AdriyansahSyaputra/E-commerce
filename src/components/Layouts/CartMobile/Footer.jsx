import React from "react";
import PropTypes from "prop-types";

const Footer = ({ totalPrice, handleSelectAll, selectedItems, cart }) => {
  return (
    <>
      <div className="bg-white flex items-center justify-between fixed bottom-0 w-full p-3">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="checkbox"
              checked={selectedItems.length === cart.length && cart.length > 0}
              onChange={handleSelectAll}
              className="w-4 h-4"
            />
          </div>
          <label className="text-sm text-slate-600">All</label>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <h1 className="text-xs text-slate-500 text-end">Total</h1>
            <p className="text-sm font-semibold text-slate-700">
              {isNaN(totalPrice)
                ? "$0.00"
                : totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
            </p>
          </div>

          <button className="bg-green-500 py-2 px-3 rounded-md text-white text-sm hover:bg-green-600">
            Buy ({selectedItems.length})
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;

Footer.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  handleSelectAll: PropTypes.func.isRequired,
  selectedItems: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};
