import React from "react";
import { StepType } from "@/app/types/StepTypes"; // Assuming StepType is defined in a types file

interface StepBarProps {
  currentStep: StepType; // Use the StepType enum for the current step
}

//this component works similar to a progress bar and indicates the step
//based on the props
const StepBar: React.FC<StepBarProps> = ({ currentStep }) => {
  const steps: StepType[] = [StepType.Product, StepType.Paper, StepType.Pay];

  const getStepLabel = (step: StepType) => {
    switch (step) {
      case StepType.Product:
        return "Product";
      case StepType.Paper:
        return "Paper";
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
        const isCompleted = step < currentStep;

        return (
          <div
            key={index}
            className="flex items-center justify-center text-center"
          >
            {/* Step Indicator */}
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

            {/* Step Name */}
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

            {/* Connector Line */}
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
