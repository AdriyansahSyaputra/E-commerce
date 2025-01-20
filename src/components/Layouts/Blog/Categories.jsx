import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  Cloud,
  Database,
  Code,
  SlidersHorizontal,
  X,
} from "lucide-react";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 1, name: "Technology", icon: Monitor, count: 12 },
    { id: 2, name: "Mobile", icon: Smartphone, count: 8 },
    { id: 3, name: "Cloud", icon: Cloud, count: 15 },
    { id: 4, name: "Database", icon: Database, count: 6 },
    { id: 5, name: "Programming", icon: Code, count: 20 },
  ];

  return (
    <>
      <aside className="hidden md:block w-80 p-6 bg-white rounded-xl shadow-md mb-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Categories</h2>
          <p className="text-sm text-slate-500 mt-1">
            Browse articles by topic
          </p>
        </div>

        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                  <Icon
                    className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-slate-700 font-medium group-hover:text-slate-900">
                  {category.name}
                </span>
              </div>

              <span className="text-sm text-slate-400 group-hover:text-indigo-600 transition-colors duration-200">
                {category.count} posts
              </span>
            </div>
          );
        })}
      </aside>

      {/* Mobile Filter Button */}
      <div className="md:hidden sticky top-0 z-30 pt-4">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2 focus:outline-none active:bg-gray-100 rounded-md px-2 py-1 transition-colors"
          >
            <SlidersHorizontal size={20} className="text-gray-700" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
          <span className="text-sm font-medium text-gray-600">44 Blogs</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 min-w-80 sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close filters"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          {/* Categories */}
          <div className="flex-1 overflow-y-auto p-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                      <Icon
                        className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900">
                      {category.name}
                    </span>
                  </div>

                  <span className="text-sm text-slate-400 group-hover:text-indigo-600 transition-colors duration-200">
                    {category.count} posts
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
        ></div>
      )}
    </>
  );
};

export default Categories;
