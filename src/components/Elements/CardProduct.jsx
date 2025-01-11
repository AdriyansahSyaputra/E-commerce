import React from "react";
import PropTypes from "prop-types";
import { Heart, Star, Check } from "lucide-react";

const CardProduct = ({ product }) => {
  return (
    <div className="p-4 rounded-md bg-white h-full">
      <div className="relative mb-4">
        <img
          src="/public/img/category/laptop.png"
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-1 p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200">
          <Heart size={20} className="text-gray-400" />
        </button>
      </div>
      <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>

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

      <p className="text-sm font-semibold text-blue-500">{product.price}</p>

      <div className="flex mt-3 items-center mb-3">
        <Check size={15} className="text-green-500 mr-1" />
        <span className="text-xs md:text-sm text-gray-500">In Stock</span>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200">
        Add To Cart
      </button>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};