import React from "react";
import PaperCarousel from "../PaperCarousel";
import PaperCategoryCarousel from "../CategoriesCarousel";

const PaperStep = () => {
  return (
    <>
      <div className="py-5">
        <PaperCarousel title="For Men" />
      </div>
      <div className="py-5">
        <PaperCarousel title="For Women" />
      </div>
      <div className="py-5">
        <PaperCarousel title="For Children" />
      </div>
      <div className="py-5">
        <PaperCategoryCarousel />
      </div>
    </>
  );
};

export default PaperStep;
