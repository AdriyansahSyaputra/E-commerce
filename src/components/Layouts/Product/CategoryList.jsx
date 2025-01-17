import React from "react";
import PropTypes from "prop-types";

const CategoryList = ({
  categories,
  selectedCategories,
  handleCheckboxChange,
}) => {
  return (
    <div className="p-4 md:p-0">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor={`category-${category.id}`}
              className={`text-base cursor-pointer select-none ${
                selectedCategories.includes(category.id)
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {category.name}
            </label>
          </div>
          <span className="text-sm text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {category.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};