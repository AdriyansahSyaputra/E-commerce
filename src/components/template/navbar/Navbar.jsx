import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Bell,
  Mail,
  ChevronDown,
  Settings,
  LogOut,
  User,
  House,
  Box,
  Info,
  ScrollText,
  SquareUserRound,
  Heart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const menuItems = [
    { title: "Home", icon: <House />, link: "/" },
    { title: "Product", icon: <Box />, link: "/product" },
    { title: "About", icon: <Info />, link: "/about" },
    { title: "Blog", icon: <ScrollText />, link: "/blogs" },
    { title: "Contact", icon: <SquareUserRound />, link: "/contact" },
  ];

  const accountMenu = [
    { title: "Profile", icon: <User />, link: "/profile" },
    { title: "Settings", icon: <Settings />, link: "/settings" },
    { title: "Wishlist", icon: <Heart />, link: "/wishlist" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

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
              <form action="" onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
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
            <div className="hidden lg:flex items-center space-x-10">
              <a
                href="/cart"
                className="text-slate-700 hover:text-amber-500 hidden lg:flex items-center"
              >
                <ShoppingCart size={20} />
              </a>
              <button className="text-gray-600 hover:text-amber-500">
                <Mail size={20} />
              </button>
              <button className="text-gray-600 hover:text-amber-500">
                <Bell size={20} />
              </button>
            </div>

            {user ? (
              <div className="hidden lg:flex relative ml-7 lg:ml-0">
                <div
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
                >
                  <img
                    src="/img/default.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 group-hover:border-blue-500"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {user.username || "Guest"}
                    </p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transform transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-16 w-56 bg-white shadow-xl rounded-lg border border-gray-100 z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">
                        {user.username || "Guest"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <a
                          href="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <User className="w-4 h-4 mr-2" /> Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <Settings className="w-4 h-4 mr-2" /> Settings
                        </a>
                      </li>
                      <li>
                        <hr className="my-1 border-gray-200" />
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-2" /> Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex space-x-2">
                <Link to="/login">
                  <button className="px-3 py-2 bg-teal-500 text-slate-100 rounded-md text-sm font-semibold hover:bg-teal-600">
                    Login
                  </button>
                </Link>
              </div>
            )}
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
            className={`fixed inset-x-0 bottom-0 top-0 bg-white transform max-h-full ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden z-50`}
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-end items-center px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-amber-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Profile Account */}
            {user ? (
              <div className="flex items-center space-x-4 px-6 py-4 border-b border-gray-200">
                <img
                  src="/img/default.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-lg object-cover border-2 border-gray-300 group-hover:border-blue-500"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {user.username || "Guest"}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            ) : (
              <div className="lg:block px-6 border-b border-gray-200 pb-4">
                <Link to="/login">
                  <button className="px-3 py-2 bg-teal-500 text-slate-100 rounded-md text-sm font-semibold hover:bg-teal-600">
                    Login
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Items */}
            <div
              className="py-4 h-full"
              style={{ maxHeight: "calc(70vh - 100px)" }}
            >
              {/* Menu Items */}
              <div className="px-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Menu
                </h2>
                {menuItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center py-2 hover:bg-gray-100 space-x-4"
                  >
                    <span className="w-5 h-5 text-gray-500">{item.icon}</span>
                    <a
                      href={item.link}
                      className="text-slate-600 hover:text-amber-500 text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>

              {/* Account menu */}
              {user && (
                <div className="px-6 border-t border-gray-200 py-4 mt-4">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Account
                  </h2>
                  {accountMenu.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center py-2 hover:bg-gray-100 space-x-4"
                    >
                      <span className="w-5 h-5 text-gray-500">{item.icon}</span>
                      <a
                        href={item.link}
                        className="text-slate-600 hover:text-amber-500 text-base font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {/* Logout Button */}
              {user && (
                <div className="bottom-0 px-6 absolute w-full border-t border-gray-200">
                  <button
                    className="w-full flex items-center space-x-4 py-2 hover:bg-gray-100 my-4"
                    onClick={handleLogout}
                  >
                    <LogOut size={20} />
                    <span className="text-slate-600 hover:text-red-500 text-base font-medium">
                      Logout
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
