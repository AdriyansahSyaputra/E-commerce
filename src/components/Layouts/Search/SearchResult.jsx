import React from "react";
import CardProduct from "../../Elements/CardProduct";
import PropTypes from "prop-types";

const SearchResult = ({ searchResults }) => {
  return (
    <>
      <div className="grid grid-cols-2 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
        {searchResults.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default SearchResult;

SearchResult.propTypes = {
  searchResults: PropTypes.array.isRequired,
};