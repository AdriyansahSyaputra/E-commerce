import React, { useState } from "react";
import { Heart, Trash2, X } from "lucide-react";
import { useWishlist } from "../../../contexts/wishlist/wishlistContext";
import PropTypes from "prop-types";
import Footer from "./Footer";
import CartItem from "./CartItem";
import Header from "./Header";

const WishlistSidebar = ({ isWishlistOpen, setIsWishlistOpen }) => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  return (
    <>
      <aside
        className={`bg-white shadow-xl fixed top-0 right-0 w-96 h-full z-30 ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <Header setIsWishlistOpen={setIsWishlistOpen} />

          {/* Cart Items */}
          <CartItem wishlist={wishlist} removeFromWishlist={removeFromWishlist} />

          {/* Footer */}
          <Footer clearWishlist={clearWishlist} />
        </div>
      </aside>

      {/* Overlay */}
      {isWishlistOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setIsWishlistOpen(false)} // Menutup cart ketika klik overlay
        />
      )}
    </>
  );
};

export default WishlistSidebar;

WishlistSidebar.propTypes = {
  isWishlistOpen: PropTypes.bool.isRequired,
  setIsWishlistOpen: PropTypes.func.isRequired,
};