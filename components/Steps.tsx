import React from "react";
import { StepType } from "@/app/types/StepTypes";
import PaperStep from "./StepComponents/PaperStep";
import ProductStep from "./StepComponents/ProductStep";
import PayStep from "./StepComponents/PayStep";

const sabadKharidProduct: string[] = [];
const sabadKharidPaper: string[] = [];

const Steps: React.FC = () => {
  if (sabadKharidProduct.length === 0) {
    return <ProductStep />;
  } else if (sabadKharidProduct.length > 0 && sabadKharidPaper.length === 0) {
    return <PaperStep />;
  } else if (sabadKharidProduct.length > 0 && sabadKharidPaper.length > 0) {
    return <PayStep />;
  }
  return (
    <>
      <h1>something went wrong...</h1>
    </>
  );
};

export default Steps;
