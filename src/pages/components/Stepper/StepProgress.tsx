import React from 'react';

const StepProgress = ({ currentStep, totalSteps } : {currentStep: number, totalSteps: number}) => {
  const percentageCompleted = ((currentStep / totalSteps) * 100).toFixed(0);

  return (
    <div className="flex items-center">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          style={{ width: `${percentageCompleted}%` }}
          className="h-4 bg-blue-500 rounded-full"
        />
      </div>
      <p className="text-white text-lg ml-2">
        {percentageCompleted}%
      </p>
    </div>
  );
};

export default StepProgress;