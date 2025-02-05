import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Heart, Star, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart/cartContext";
import { useWishlist } from "../../contexts/wishlist/wishlistContext";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const storedUser = sessionStorage.getItem("token");

  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Cek apakah item ada di wishlist
    const isProductInWishlist = wishlist.some(
      (wishlistItem) => wishlistItem.id === product.id
    );
    setIsInWishlist(isProductInWishlist);
  }, [wishlist, product.id]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (storedUser) {
      addToCart(product);
    } else {
      navigate("/login");
    }
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    if (!storedUser) {
      navigate("/login");
      return;
    }

    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`, { state: product })}
      className="p-4 rounded-md bg-white h-full flex flex-col cursor-pointer"
    >
      <div className="relative mb-4">
        <img
          src="/public/img/category/laptop.png"
          alt={product.name}
          className="w-full h-32 object-cover rounded-md"
        />
        <button
          onClick={handleToggleWishlist}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200"
          disabled={isInWishlist} // Matikan tombol jika sudah di wishlist
        >
          <Heart
            size={20}
            fill={isInWishlist ? "red" : "none"}
            className={`transition-colors duration-300 ${
              isInWishlist ? "text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-sm font-medium mb-1 line-clamp-2 min-h-[1rem]">
          {product.name}
        </h3>

        <div className="flex flex-col md:flex-row md:items-center gap-1 mb-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <Star size={14} key={index} />
            ))}
          </div>
          <span className="text-xs md:text-sm text-gray-500">
            {product.reviews} reviews
          </span>
        </div>

        <p className="text-sm font-semibold text-blue-500 mb-3">
          {product.price}
        </p>

        {product.stock ? (
          <div className="flex items-center mb-4">
            <Check size={15} className="text-green-500 mr-1" />
            <span className="text-xs md:text-sm text-gray-500">In Stock</span>
          </div>
        ) : (
          <div className="flex items-center mb-4">
            <X size={15} className="text-red-500 mr-1" />
            <span className="text-xs md:text-sm text-red-500">Out Stock</span>
          </div>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};