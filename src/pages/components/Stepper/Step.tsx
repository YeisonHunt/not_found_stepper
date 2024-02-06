import { TiTick } from "react-icons/ti";
import { StepState, Step as StepType } from "./shared/constants";

const Step = ({
  step,
  stepNumber,
  currentStep,
}: {
  step: StepType;
  stepNumber: number;
  currentStep: number;
}) => (
  <div
    className={`step-item  ${currentStep === stepNumber && "active"} ${
      step.state === StepState.Completed && "complete"
    } `}
  >
    <div className="step ">
      {step.state === StepState.Completed ? <TiTick size={24} /> : stepNumber}
    </div>

    <p className="text-gray-300">{step.type}</p>
  </div>
);

export default Step;
