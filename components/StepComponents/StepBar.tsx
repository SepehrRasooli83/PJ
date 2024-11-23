import React from "react";

interface ProgressBarProps {
  currentStep: number; // Current active step (1, 2, or 3)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = ["Product", "Paper", "Pay"];

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto">
      {steps.map((step, index) => {
        const isActive = index + 1 === currentStep;
        const isCompleted = index + 1 < currentStep;

        return (
          <div key={index} className="flex-1 flex items-center">
            {/* Step Indicator */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                isActive
                  ? "bg-blue-500"
                  : isCompleted
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>

            {/* Step Name */}
            <span
              className={`ml-2 text-sm ${
                isCompleted
                  ? "text-green-500"
                  : isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-500"
              }`}
            >
              {step}
            </span>

            {/* Line Connector */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  isCompleted ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
