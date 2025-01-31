import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, Bell, Mail, ChevronDown, Settings, LogOut, User } from "lucide-react";
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
    { title: "Home", link: "/" },
    { title: "Product", link: "/product" },
    { title: "About", link: "/about" },
    { title: "Blog", link: "/blogs" },
    { title: "Contact", link: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if(query.trim()) {
      navigate(`/search?query=${query}`);
    }
  }

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
