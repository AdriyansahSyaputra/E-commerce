import { Check, ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    discount: "-41%",
    price: "$555",
    originalPrice: "$899",
    sold: "56/100",
    reviews: 200,
  },
  {
    id: 2,
    name: "Phone",
    discount: "-30%",
    price: "$299",
    originalPrice: "$399",
    sold: "40/100",
    reviews: 150,
  },
  {
    id: 3,
    name: "Headphones",
    discount: "-20%",
    price: "$99",
    originalPrice: "$125",
    sold: "25/50",
    reviews: 80,
  },
  {
    id: 4,
    name: "Camera",
    discount: "-35%",
    price: "$450",
    originalPrice: "$699",
    sold: "30/80",
    reviews: 90,
  },
  {
    id: 5,
    name: "Item 5",
    discount: "-35%",
    price: "$450",
    originalPrice: "$699",
    sold: "30/80",
    reviews: 90,
  },
  {
    id: 6,
    name: "Item 6",
    discount: "-35%",
    price: "$450",
    originalPrice: "$699",
    sold: "30/80",
    reviews: 90,
  },
  {
    id: 7,
    name: "Item 7",
    discount: "-35%",
    price: "$450",
    originalPrice: "$699",
    sold: "30/80",
    reviews: 90,
  },
  {
    id: 8,
    name: "Item 8",
    discount: "-35%",
    price: "$450",
    originalPrice: "$699",
    sold: "30/80",
    reviews: 90,
  },
];

const TopSelling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update visible products based on current slide and window width
  useEffect(() => {
    const itemsToShow = isMobile ? 2 : isTablet ? 4 : 5;
    const maxStartIndex = products.length - itemsToShow;

    if (currentSlide > maxStartIndex) {
      setCurrentSlide(maxStartIndex);
    }

    setVisibleProducts(products);
  }, [currentSlide, isMobile, isTablet]);

  const handlePrevSlide = () => {
    const itemsToShow = isMobile ? 2 : isTablet ? 4 : 5;
    setCurrentSlide((prev) =>
      prev === 0 ? products.length - itemsToShow : prev - 1
    );
  };

  const handleNextSlide = () => {
    const itemsToShow = isMobile ? 2 : isTablet ? 4 : 5;
    setCurrentSlide((prev) =>
      prev >= products.length - itemsToShow ? 0 : prev + 1
    );
  };

  const getItemWidth = () => {
    if (isMobile) return 50; // 2 columns
    if (isTablet) return 25; // 4 columns
    return 20; // 5 columns
  };

  return (
    <div className="max-w-[90%] mx-auto md:px-10 mt-10 mb-10">
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

      {/* Cards Container with Overflow Hidden */}
      <div className="relative mt-3">
        <div className="overflow-hidden">
          {/* Sliding Container */}
          <div
            className="flex transition-all duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * getItemWidth()}%)`,
            }}
          >
            {visibleProducts.map((product, index) => (
              <div
                className="w-1/2 md:w-1/4 lg:w-1/5 flex-shrink-0 px-2"
                key={index}
              >
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
                  <h3 className="text-sm font-medium mb-2 line-clamp-2">
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

                  <p className="text-sm font-semibold text-blue-500">
                    {product.price}
                  </p>

                  <div className="flex mt-3 items-center mb-3">
                    <Check size={15} className="text-green-500 mr-1" />
                    <span className="text-xs md:text-sm text-gray-500">
                      In Stock
                    </span>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Navigation */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-0 p-2 -translate-x-4 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
          onClick={handlePrevSlide}
        >
          <ChevronLeft size={16} className="text-sm" />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 p-2 translate-x-4 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
          onClick={handleNextSlide}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
