import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import PropTypes from "prop-types";

const CartItem = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <>
      <div className="flex-1 overflow-y-auto px-2 py-2">
        <div className="space-y-4">
          {/* Cart Item */}
          {cart.map((item) => (
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

                  <div className="mt-3 flex items-center gap-4">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-white rounded-md transition-colors duration-200"
                      >
                        {item.quantity === 1 ? (
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        ) : (
                          <Minus className="w-4 h-4 text-gray-600" />
                        )}
                      </button>
                      <span className="w-8 text-center font-medium text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-white rounded-md transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-0 right-0 p-2 hover:bg-red-50 rounded-full group transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartItem;

CartItem.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};
