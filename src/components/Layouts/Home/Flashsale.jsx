import React, { useState } from "react";
import { AlarmClock, Heart, ChevronRight, ChevronLeft } from "lucide-react";

const Flashsale = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-[90%] md:max-w-6xl mx-auto bg-white md:px-10 mt-10 mb-10">
      {/* Header Flash Sale */}
      <div className="p-4 flex-1 md:flex items-center justify-between border-b-2 md:mb-2 border-orange-600">
        <div className="flex mb-1 md:mb-0">
          <AlarmClock size={25} className="text-orange-600" />
          <h1 className="text-lg md:text-xl font-bold ml-2 text-orange-600">
            Flash Sale
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <h1 className="text-sm md:text-base font-semibold text-gray-600 ">
            Offers ends in :{" "}
          </h1>
          <div className="md:ml-2 space-x-2 mt-3 md:mt-0">
            <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
              00
            </span>
            <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
              00
            </span>
            <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
              00
            </span>
            <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
              00
            </span>
          </div>
        </div>
      </div>

      {/* Content: Promo Banner and Product Cards */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Promo Banner */}
          <div className="lg:w-1/3 bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-center">
            <div className="text-3xl font-bold mb-4">HURRY UP</div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl">SAVE UP TO</span>
              <span className="text-7xl font-bold">80%</span>
            </div>
            <div className="text-lg mt-2 mb-6">
              THIS WEEK ONLY SHOPPING DAYS
            </div>
            <div className="text-8xl font-bold">12.12</div>
          </div>

          {/* Product Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="bg-red-500 text-white text-sm px-2 py-0.5 rounded w-fit mb-2">
                  -41%
                </div>

                <div className="relative mb-4">
                  <img
                    src=""
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow">
                    <Heart size={18} className="text-gray-400" />
                  </button>
                </div>
                <h3 className="font-medium text-sm mb-2 line-clamp-2">
                  Laptop
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">200 review</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 font-bold">$555</span>
                  <span className="text-gray-400 line-through text-sm">
                    $899
                  </span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Sold: 56/100 products
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Only visible on hover */}
        {isHovered && (
          <>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Flashsale;
