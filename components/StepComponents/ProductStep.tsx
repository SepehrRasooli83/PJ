import React from "react";
import ProductCarousel from "../ProductCarousel";
import ProductCategoryCarousel from "../CategoriesCarousel";

const ProductStep = () => {
  return (
    <>
      <div className="py-5">
        <ProductCarousel title="For Men" />
      </div>
      <div className="py-5">
        <ProductCarousel title="For Women" />
      </div>
      <div className="py-5">
        <ProductCarousel title="For Children" />
      </div>
      <div className="py-5">
        <ProductCategoryCarousel />
      </div>
    </>
  );
};

export default ProductStep;
