import React, { useState } from "react";
import { Minus, Plus, Trash2, Menu, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/cart/cartContext";

const CartResultMobile = () => {
  const { cart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  const totalPrice = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]); // Uncheck all
    } else {
      setSelectedItems(cart.map((item) => item.id)); // Check all
    }
  };

  return (
    <div className="w-full h-screen relative">
      {/* Header */}
      <div className="bg-white flex items-center justify-between border-b border-gray-200 shadow-sm py-4 px-3">
        <div className="flex items-center gap-2">
          <Link to="/product">
            <button className="w-5 h-5">
              <ArrowLeft />
            </button>
          </Link>
          <h1 className="text-lg font-semibold text-gray-800">Your Cart</h1>
        </div>
        <div>
          <Menu className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
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

      {/* Footer */}
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
    </div>
  );
};

export default CartResultMobile;
