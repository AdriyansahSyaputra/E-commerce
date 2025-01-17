import React, { useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../Elements/CardProduct";

const ProductView = ({ products }) => {

  return (
    <>
      {/* Main Content */}
      <div>
        <div className="grid grid-cols-2 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductView;

ProductView.propTypes = {
  products: PropTypes.array.isRequired,
};