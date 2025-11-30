import React from 'react';
import { ArrowRight } from 'lucide-react';

const StepCard = ({ step, index, totalSteps }) => {
  return (
    <div className="relative">
      <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col rounded-lg border border-gray-100 bg-white bg-opacity-80 backdrop-blur-sm">
        <div className="mb-6 flex justify-between items-center">
          <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
            {step.number}
          </div>
          <div className="text-secondary">
            {step.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 text-secondary">
          {step.title}
        </h3>

        <p className="text-gray-700 flex-grow">
          {step.description}
        </p>

        {index < totalSteps - 1 && (
          <div className="md:hidden flex justify-center mt-6">
            <ArrowRight className="text-secondary" />
          </div>
        )}
      </div>

      {index < totalSteps - 1 && (
        <div className="hidden md:flex absolute -right-6 top-24 z-20">
          <div className="bg-white rounded-full p-2 shadow-md">
            <ArrowRight className="text-secondary w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default StepCard;

