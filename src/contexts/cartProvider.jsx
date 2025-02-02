import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Ambil token user dari session storage
    const token = sessionStorage.getItem("token");
    // Jika ada token, ambil data keranjang dari localStorage
    if (token) {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (item) => {
    const price = parseInt(item.price);

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      if (quantity === 1) {
        return prevCart.filter((item) => item.id !== id);
      }
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};