import { useState } from "react";
import "./stepper.css";

import Step from "./Step";
import StepButton from "./StepButton";
import StepStatus from "./StepStatus";
import StepProgress from "./StepProgress";
import Congratulations from "./Congratulations";
import ExternalFormContent from "../ExternalFormContent";
import { stepsPerPage, Step as StepType, StepState } from "./shared/constants";

const Stepper = ({ externalSteps} : { externalSteps:StepType[] }) => {
  //State management
  const [stepsState, setStepsState] = useState<StepType[]>(externalSteps);
  const currentStepIndex = stepsState.findIndex(step => step.state === 'completed');
  const [currentStep, setCurrentStep] = useState(currentStepIndex +2 || 1);
  const [currentPage, setCurrentPage] = useState(0);
  const [complete, setComplete] = useState(false);

  //Handler functions
  const handleNext = () => {
    if (currentStep >= stepsState.length) {
      setComplete(true);
      let newState: StepType[] = stepsState.map((step, i) => ({
        ...step,
        complete: i + 1 <= currentStep,
      }));
      setStepsState(newState);
    } else {
      setCurrentStep((prev) => prev + 1);
      let newState: StepType[] = stepsState.map((step, i) =>
        i + 1 <= currentStep ? { ...step, state: StepState.Completed } : step
      );
      setStepsState(newState);
      if (currentStep % stepsPerPage === 0) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      if ((currentStep - 1) % stepsPerPage === 0) {
        setCurrentPage((prev) => prev - 1);
      }
      setStepsState((prevSteps) =>
        prevSteps.map((step, i) => ({
          ...step,
          state: i + 2 < currentStep ? StepState.Completed : StepState.Ready,
        }))
      );
    }
  };

  return complete ? (
    <Congratulations />
  ) : (
    <>
      <div className="flex flex-wrap justify-between">
        {stepsState
          ?.slice(currentPage * stepsPerPage, (currentPage + 1) * stepsPerPage)
          .map((step, i) => {
            const stepNumber = currentPage * stepsPerPage + i + 1;
            return (
              <Step
                key={i}
                step={step}
                stepNumber={stepNumber}
                currentStep={currentStep}
              />
            );
          })}
      </div>

      <ExternalFormContent />
      <div>
        <StepButton
          onClick={handlePrevious}
          disabled={currentStep === 1}
          label="Previous"
        />
        <StepButton
          disabled={currentStep > stepsState.length && !complete}
          onClick={handleNext}
          label={currentStep === stepsState.length ? "Finish" : "Next"}
        />
        <StepStatus currentStep={currentStep} totalSteps={stepsState.length} />
        <StepProgress
          currentStep={currentStep}
          totalSteps={stepsState.length}
        />
      </div>
    </>
  );
};

export default Stepper;
