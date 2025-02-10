import React, { useState } from "react";
import { useWishlist } from "../contexts/wishlist/wishlistContext";
import { useCart } from "../contexts/cart/cartContext";
import Header from "../components/Layouts/WishlistMobile/Header";
import SearchBar from "../components/Layouts/WishlistMobile/SearchBar";
import Filters from "../components/Layouts/WishlistMobile/Filters";
import CardProduct from "../components/Elements/CardProduct";
import Footer from "../components/Layouts/WishlistMobile/Footer";

const WishlistMobile = () => {
  const { wishlist, clearWishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showStockDropdown, setShowStockDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header cart={cart} />

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Filters
          showSortDropdown={showSortDropdown}
          setShowSortDropdown={setShowSortDropdown}
          showStockDropdown={showStockDropdown}
          setShowStockDropdown={setShowStockDropdown}
          showCategoryDropdown={showCategoryDropdown}
          setShowCategoryDropdown={setShowCategoryDropdown}
        />

        {/* Product List */}
        <div className="grid grid-cols-2 gap-3 p-4">
          {wishlist.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>

        <Footer clearWishlist={clearWishlist} />
      </div>
    </>
  );
};

export default WishlistMobile;
