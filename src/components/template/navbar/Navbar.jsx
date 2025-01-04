import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Product", link: "/product" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <header className="bg-white shadow-md px-4 lg:px-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <a
                href="/"
                className="font-semibold text-xl text-amber-500 block"
              >
                Online Shop
              </a>
            </div>

            {/* Navigation */}
            <nav>
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <a
                    href={item.link}
                    key={item.title}
                    className="text-slate-700 hover:text-amber-500 text-base font-medium"
                  >
                    {item.title}
                  </a>
                ))}
                <a
                  href=""
                  className="px-3 py-2 bg-teal-500 text-white rounded-md text-sm font-semibold hover:bg-teal-600"
                >
                  Login
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-slate-700 hover:text-amber-500"
                >
                  {isOpen ? <X /> : <Menu />}
                </button>
              </div>

              {/* Mobile Navigation */}
              <div
                className={`fixed inset-0 bg-white z-50 transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden`}
              >
                <div className="flex justify-between items-center px-4 py-4">
                  <a
                    href="/"
                    className="font-semibold text-xl text-amber-500 block"
                  >
                    Online Shop
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-amber-500"
                  >
                    <X />
                  </button>
                </div>
                <div className="flex flex-col space-y-4 px-6 py-6">
                  {menuItems.map((item) => (
                    <a
                      href={item.link}
                      key={item.title}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-700 hover:text-amber-500 block text-lg font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                  <a
                    href=""
                    className="px-3 py-2 max-w-max bg-teal-500 text-white rounded-md text-base font-semibold hover:bg-teal-600"
                  >
                    Login
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
