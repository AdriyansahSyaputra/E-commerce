import React from "react";
import { Minus, Plus, Trash2, Menu, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/cartContext";
import PropTypes from "prop-types";

const CartResultMobile = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
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
          {/* Card */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white flex items-center px-3 py-5 relative gap-3"
            >
              <div className="w-4 h-4 rounded-lg relative">
                <input
                  type="checkbox"
                  id="custom-checkbox"
                  className=" w-full h-full"
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
                  <Minus className="w-4 h-4" />
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
                id="checkbox"
                className="peer appearance-none w-5 h-5 rounded-sm border border-gray-300 checked:bg-green-500 checked:border-green-500"
              />
              <svg
                className="w-full h-full text-white absolute top-0 left-0 hidden peer-checked:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 16.2l-4.2-4.2 1.4-1.4L9 13.4l7.8-7.8 1.4 1.4L9 16.2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <label htmlFor="checkbox" className="text-xs text-slate-600">
              All
            </label>
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
              Buy ({cart.length})
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartResultMobile;
