import React from 'react';
import StepCard from './StepCard';

const StepsGrid = ({ steps }) => {
  return (
    <div className="relative">
      {/* Connected line through steps */}
      <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} totalSteps={steps.length} />
        ))}
      </div>
    </div>
  );
};

export default StepsGrid;

