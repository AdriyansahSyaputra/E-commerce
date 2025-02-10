import React from "react";
import { useCart } from "../../../contexts/cart/cartContext";
import PropTypes from "prop-types";
import Header from "./Header";
import CartItem from "./CartItem";
import Footer from "./Footer";

const CartSidebarDesktop = ({ isCartOpen, setIsCartOpen }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <aside
        className={`bg-white shadow-xl fixed top-0 right-0 w-96 h-full z-30 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <Header setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />

          {/* Cart Items */}
          <CartItem cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />

          {/* Footer */}
          <Footer  totalPrice={totalPrice} clearCart={clearCart}/>
        </div>
      </aside>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};

export default CartSidebarDesktop;

CartSidebarDesktop.propTypes = {
  setIsCartOpen: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
};
