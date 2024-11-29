import React from "react";
import { StepType } from "@/app/types/StepTypes";
import ProductStep from "./StepComponents/ProductStep";
import CategoryStep from "./StepComponents/CategoryStep";
import PayStep from "./StepComponents/PayStep";

const categoryChoice: string[] = ["Doulingo"];
const basketItems: string[] = [];

const Steps: React.FC = () => {
  if (categoryChoice.length > 0) {
    return <ProductStep />;
  } else if (categoryChoice.length === 0 && basketItems.length === 0) {
    return <CategoryStep />;
  } else if (basketItems.length > 0) {
    return <PayStep />;
  }
  return (
    <>
      <h1>something went wrong...</h1>
    </>
  );
};

export default Steps;
