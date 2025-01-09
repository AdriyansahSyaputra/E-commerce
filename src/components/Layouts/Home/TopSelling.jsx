import { Check, ChevronRight, Heart, Star } from "lucide-react";
import React, { useState } from "react";

const TopSelling = () => {
  return (
    <>
      <div className="max-w-[95%] mx-auto md:px-10 mt-10 mb-10">
        {/* Header */}
        <div className="p-4 flex-1 md:flex items-center bg-white justify-between rounded-md">
          <div>
            <h1 className="text-base md:text-xl font-semibold">
              Top Selling this Week
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-2 cursor-pointer text-orange-600">
            <h1 className="text-md font-light">See All</h1>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Cards Product */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
          {[...Array(5)].map((_, index) => (
            <div className="p-4 rounded-md bg-white max-h-fit" key={index}>
              <div className="relative mb-4">
                <img
                  src="/public/img/category/laptop.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-1 p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                  <Heart size={20} className="text-gray-400" />
                </button>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2">
                Macbook M1 Air
              </h3>

              <div className="flex flex-col md:flex-row md:items-center gap-1 mb-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <Star size={14} key={index} className="" />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-500">
                  599 reviews
                </span>
              </div>

              <p className="text-sm font-semibold text-blue-500">$999.99</p>

              <div className="flex mt-3 items-center mb-3">
                <Check size={15} className="text-green-500 mr-1" />
                <span className="text-xs md:text-sm text-gray-500">
                  In Stock
                </span>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSelling;
