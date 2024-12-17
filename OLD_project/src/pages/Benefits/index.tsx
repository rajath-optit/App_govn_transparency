import React from 'react';
import { BenefitsList } from './BenefitsList';
import { EligibilityChecker } from './EligibilityChecker';

const Benefits = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Benefits</h1>
      <EligibilityChecker />
      <BenefitsList />
    </div>
  );
};

export default Benefits;
