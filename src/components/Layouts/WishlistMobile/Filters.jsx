import React from "react";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

const Filters = ({ showSortDropdown, setShowSortDropdown, showStockDropdown, setShowStockDropdown, showCategoryDropdown, setShowCategoryDropdown }) => {
  return (
    <div className="p-4 bg-white border-b">
      <div className="flex gap-2 overflow-x-auto">
        {/* Sort Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            Sort <ChevronDown className="w-4 h-4" />
          </button>
          {showSortDropdown && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Newest
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Price: Low to High
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Price: High to Low
              </button>
            </div>
          )}
        </div>

        {/* Stock Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white"
            onClick={() => setShowStockDropdown(!showStockDropdown)}
          >
            Stock <ChevronDown className="w-4 h-4" />
          </button>
          {showStockDropdown && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                In Stock
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Out of Stock
              </button>
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            Category <ChevronDown className="w-4 h-4" />
          </button>
          {showCategoryDropdown && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Electronics
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Fashion
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;

Filters.propTypes = {
  showSortDropdown: PropTypes.bool.isRequired,
  setShowSortDropdown: PropTypes.func.isRequired,
  showStockDropdown: PropTypes.bool.isRequired,
  setShowStockDropdown: PropTypes.func.isRequired,
  showCategoryDropdown: PropTypes.bool.isRequired,
  setShowCategoryDropdown: PropTypes.func.isRequired,
};