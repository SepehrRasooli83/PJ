"use client";

import React, { useState, useEffect } from "react";
import { StepType } from "@/app/types/StepTypes";

const categoryChoice: string[] = ["Doulingo"];
const basketItems: string[] = [];

const StepBar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<StepType | null>(null);

  const steps: StepType[] = [StepType.Category, StepType.Product, StepType.Pay];

  useEffect(() => {
    if (categoryChoice.length > 0) {
      setCurrentStep(StepType.Product);
    } else if (categoryChoice.length === 0 && basketItems.length === 0) {
      setCurrentStep(StepType.Category);
    } else if (basketItems.length > 0) {
      setCurrentStep(StepType.Pay);
    }
  }, []);

  const getStepLabel = (step: StepType) => {
    switch (step) {
      case StepType.Category:
        return "Category";
      case StepType.Product:
        return "Product";
      case StepType.Pay:
        return "Pay";
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto p-4">
      {steps.map((step, index) => {
        const isActive = step === currentStep;
        const isCompleted = currentStep && step < currentStep;

        return (
          <div
            key={index}
            className="flex items-center justify-center text-center"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : isCompleted
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>

            <div
              className={`ml-2 text-sm ${
                isCompleted
                  ? "text-green-600"
                  : isActive
                  ? "text-blue-600 font-bold"
                  : "text-gray-500"
              }`}
            >
              {getStepLabel(step)}
            </div>

            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  isCompleted ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepBar;
