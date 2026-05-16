import React from 'react';
import { Check } from 'lucide-react';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'কোর্স নির্বাচন', status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'active' : 'inactive' },
    { id: 2, label: 'পেমেন্ট', status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'active' : 'inactive' },
    { id: 3, label: 'নিশ্চিতকরণ', status: currentStep > 3 ? 'completed' : currentStep === 3 ? 'active' : 'inactive' },
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-10">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step.status === 'completed'
                  ? 'bg-green-500 border-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                  : step.status === 'active'
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(24,95,165,0.3)]'
                  : 'bg-white border-gray-200 text-gray-400'
              }`}
            >
              {step.status === 'completed' ? (
                <Check size={20} strokeWidth={3} />
              ) : (
                <span className="text-sm font-bold">{step.id}</span>
              )}
            </div>
            <span
              className={`mt-2 text-xs font-medium bengali-text transition-colors duration-300 ${
                step.status === 'active' ? 'text-primary' : 'text-gray-500'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-[2px] mx-4 mb-6 bg-gray-100 relative">
              <div
                className={`absolute inset-0 bg-primary transition-all duration-500 ${
                  step.status === 'completed' ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
