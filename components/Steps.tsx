import React from "react";
import { StepType } from "@/app/types/StepTypes";
import PaperStep from "./StepComponents/PaperStep";
import ProductStep from "./StepComponents/ProductStep";
import PayStep from "./StepComponents/PayStep";

type StepPropsType = {
  step: StepType;
};

const Steps = (props: StepPropsType) => {
  switch (props.step) {
    case StepType.Product:
      return (
        <>
          <ProductStep />
        </>
      );
    case StepType.Paper:
      return (
        <>
          <PaperStep />
        </>
      );
    case StepType.Pay:
      return (
        <>
          <PayStep />
        </>
      );
  }
};

export default Steps;
