import React, { useState } from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import SearchResult from "../components/Layouts/Search/SearchResult";
import FilterCategories from "../components/Fragments/FilterCategories";
import { useLocation} from "react-router-dom";
import products from "../utils/products";
import categories from "../utils/categories";

const SearchPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Search by input
  const query = new URLSearchParams(useLocation().search).get("query");
  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  const handleApplyFilters = () => {
    setIsOpen(false);
  
  };

  return (
    <>
      <Navbar />
      <main className="min-h-full ">
        {searchResults.length > 0 ? (
          <div className="md:flex md:px-10 gap-6 my-10">
            <FilterCategories
              selectedCategories={selectedCategories}
              handleCheckboxChange={handleCheckboxChange}
              categories={categories}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleClearAll={handleClearAll}
              handleApplyFilters={handleApplyFilters}
            />
            <div className="flex-1">
              <SearchResult searchResults={searchResults} />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <p className="text-xl font-semibold text-gray-500 text-center w-4/5 md:w-full">
              The product name {`"${query}"`} you searched for was not found.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
