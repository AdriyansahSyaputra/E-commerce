import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart, Bell, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Product", link: "/product" },
    { title: "About", link: "/about" },
    { title: "Blog", link: "/blogs" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <header className="bg-white lg:border-b border-gray-200">
        <div className="mx-auto py-4">
          <div className="flex flex-wrap items-center justify-between px-4 lg:px-10">
            {/* Logo */}
            <div className="flex-shrink-0 hidden lg:block">
              <a href="/" className="font-semibold text-2xl text-amber-500">
                PediaShop
              </a>
            </div>

            {/* Search Input */}
            <div className="flex-grow max-w-xl mx-4 hidden lg:block">
              <form action="">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-amber-500"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Desktop Cart and Auth */}
            <div className="flex items-center space-x-20">
              <a
                href="/cart"
                className="text-slate-700 hover:text-amber-500 hidden lg:flex items-center"
              >
                <ShoppingCart size={20} />
              </a>

              <div className="hidden lg:flex space-x-2">
                <Link to="/login">
                  <button className="px-3 py-2 border border-teal-500 text-teal-500 rounded-md text-sm font-semibold hover:bg-teal-50">
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button className="px-3 py-2 bg-teal-500 text-white rounded-md text-sm font-semibold hover:bg-teal-600">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex items-center justify-between mt-4 px-4 lg:px-10">
            {/* Search Input */}
            <form action="" className="flex-grow mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-amber-500"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-amber-500">
                <Mail size={20} />
              </button>
              <button className="text-gray-600 hover:text-amber-500">
                <Bell size={20} />
              </button>
              <button className="text-gray-600 hover:text-amber-500">
                <ShoppingCart size={20} />
              </button>
              <button
                className="text-gray-600 hover:text-amber-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Line Divider */}
          <div className="border-t hidden lg:block border-gray-200 mt-4"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex mt-2 ">
            <div className="mx-auto flex space-x-8 items-center">
              {menuItems.map((item) => (
                <a
                  href={item.link}
                  key={item.title}
                  className="text-slate-700 hover:text-amber-500 text-base font-medium"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation Bottom Sheet */}
          <div
            className={`fixed inset-x-0 bottom-0 bg-white shadow-lg transform ${
              isOpen ? "translate-y-0" : "translate-y-full"
            } transition-transform duration-300 ease-in-out lg:hidden z-50`}
            style={{
              maxHeight: "70vh",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            {/* Handle bar */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-3"></div>

            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-semibold text-xl text-amber-500">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-amber-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div
              className="px-6 py-4 overflow-y-auto"
              style={{ maxHeight: "calc(70vh - 100px)" }}
            >
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-center text-lg font-medium text-gray-700 hover:text-amber-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}

                {/* Auth Buttons */}
                <div className="flex flex-col space-y-3 pt-6">
                  <button className="w-full px-4 py-3 border border-teal-500 text-teal-500 rounded-lg font-semibold hover:bg-teal-50">
                    Login
                  </button>
                  <button className="w-full px-4 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
