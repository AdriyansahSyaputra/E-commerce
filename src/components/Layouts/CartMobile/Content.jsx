import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import PropTypes from "prop-types";

const Content = ({
  cart,
  selectedItems,
  handleCheckboxChange,
  updateQuantity,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white flex items-center px-3 py-5 relative gap-3"
          >
            <div className="w-4 h-4 rounded-lg relative">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="w-full h-full"
              />
            </div>

            <div className="w-16 h-16 rounded-md overflow-hidden">
              <img
                src="/img/category/laptop.png"
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col p-2 gap-1">
              <h1 className="text-xs text-slate-500">{item.name}</h1>
              <p className="text-sm font-semibold text-blue-500">
                {(item.price || 0).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>

            <div className="flex items-center gap-3 absolute bottom-3 right-4 border-2 rounded-full py-1 px-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                {item.quantity === 1 ? (
                  <Trash2 className="w-4 h-4" />
                ) : (
                  <Minus className="w-4 h-4" />
                )}
              </button>
              <span className="text-sm font-semibold text-slate-500">
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;

Content.propTypes = {
  cart: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};