import Steps from "@/components/Steps";
import { StepType } from "./types/StepTypes";
import StepBar from "@/components/StepComponents/StepBar";

export default function Home() {
  return (
    <>
      <div>
        <StepBar currentStep={StepType.Paper} />
        <Steps step={StepType.Product} />
      </div>
    </>
  );
}
