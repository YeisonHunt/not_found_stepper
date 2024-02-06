const StepStatus = ({ currentStep, totalSteps }) => (
    <p className="text-white text-lg">
      You are in step number {currentStep} of {totalSteps}
    </p>
  );
  export default StepStatus;