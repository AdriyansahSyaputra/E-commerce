import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ cart }) => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => window.history.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h1 className="text-lg font-semibold">Your Wishlist</h1>
        </div>
        <div className="relative">
          <Link to={"/cart"}>
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};
