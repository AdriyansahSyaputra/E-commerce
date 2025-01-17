import React, { useState } from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import PromoBanner from "../components/Layouts/Product/PromoBanner";
import ProductView from "../components/Layouts/Product/ProductView";
import FilterCategories from "../components/Layouts/Product/FilterCategories";
import products from "../utils/products";

const categories = [
  { id: 1, name: "smartphone", count: 15 },
  { id: 2, name: "laptop/computer", count: 12 },
  { id: 3, name: "headphones", count: 8 },
  { id: 4, name: "tablet", count: 10 },
  { id: 5, name: "television", count: 6 },
  { id: 6, name: "gamepad/console", count: 9 },
  { id: 7, name: "tools", count: 14 },
  { id: 8, name: "smartwatch", count: 7 },
];

const Product = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    // Logic for applying filters can be added here.
  };

  return (
    <>
      <Navbar />
      <PromoBanner />
      <main className="md:flex md:px-10 gap-6 my-10">
        <FilterCategories selectedCategories={selectedCategories} handleCheckboxChange={handleCheckboxChange} categories={categories} isOpen={isOpen} setIsOpen={setIsOpen} handleClearAll={handleClearAll} handleApplyFilters={handleApplyFilters} />
        <ProductView products={products} />
      </main>
      <Footer />
    </>
  );
};

export default Product;
