import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { WishlistContext } from "./wishlistContext";

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        // Ambil token user dari session
        const token = sessionStorage.getItem("token");
        // Jika ada token, ambil data wishlist dari localStorage
        if (token) {
            const storedWishlist = localStorage.getItem("wishlist");
            return storedWishlist ? JSON.parse(storedWishlist) : [];
        }
        return [];
    });

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if(token) {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        } else {
            localStorage.removeItem("wishlist");
        }
    }, [wishlist]);

    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => {
            const existingItem = prevWishlist.find(
                (wishlistItem) => wishlistItem.id === item.id
            );
            if (existingItem) {
                return prevWishlist.map((wishlistItem) => {
                    if (wishlistItem.id === item.id) {
                        return {
                            ...wishlistItem,
                            quantity: wishlistItem.quantity + 1,
                        };
                    }
                    return wishlistItem;
                });
            }
            return [...prevWishlist, { ...item, quantity: 1 }];
        });
    };


    const removeFromWishlist = (itemId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== itemId));
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

WishlistProvider.propTypes = {
    children: PropTypes.node.isRequired,
};