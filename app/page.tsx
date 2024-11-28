import Steps from "@/components/Steps";
import { StepType } from "./types/StepTypes";
import StepBar from "@/components/StepComponents/StepBar";

export default function Home() {
  return (
    <>
      <div>
        <Steps step={StepType.Product} />
      </div>
    </>
  );
}
