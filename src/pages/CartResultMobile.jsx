import React, { useState } from "react";
import { House, Box, Info, ScrollText, SquareUserRound } from "lucide-react";
import { useCart } from "../contexts/cart/cartContext";
import Header from "../components/Layouts/CartMobile/Header";
import Content from "../components/Layouts/CartMobile/Content";
import Footer from "../components/Layouts/CartMobile/footer";
import NavbarMobile from "../components/template/navbar/NavbarMobile";

const CartResultMobile = () => {
  const { cart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const menuItems = [
    { title: "Home", icon: <House />, link: "/" },
    { title: "Product", icon: <Box />, link: "/product" },
    { title: "About", icon: <Info />, link: "/about" },
    { title: "Blog", icon: <ScrollText />, link: "/blogs" },
    { title: "Contact", icon: <SquareUserRound />, link: "/contact" },
  ];

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

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <div className="w-full h-screen relative">
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />

        <Content
          cart={cart}
          selectedItems={selectedItems}
          handleCheckboxChange={handleCheckboxChange}
          updateQuantity={updateQuantity}
        />

        <Footer
          totalPrice={totalPrice}
          handleSelectAll={handleSelectAll}
          selectedItems={selectedItems}
          cart={cart}
        />

        {/* Mobile Navigation Bottom Sheet */} 
        <NavbarMobile
          menuItems={menuItems}
          handleLogout={handleLogout}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </>
  );
};

export default CartResultMobile;
