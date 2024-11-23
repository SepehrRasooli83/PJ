import Steps from "@/components/Steps";
import { StepType } from "./types/StepTypes";

export default function Home() {
  return (
    <>
      <div>
        <Steps step={StepType.Product} />
      </div>
    </>
  );
}
