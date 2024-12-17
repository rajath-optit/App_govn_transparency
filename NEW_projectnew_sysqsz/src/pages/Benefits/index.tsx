import React from 'react';
import { BenefitsList } from './BenefitsList';
import { EligibilityChecker } from './EligibilityChecker';
import { useBenefitStore } from '../../store/benefitStore';

const Benefits = () => {
  const { benefits, eligibility, isLoading, fetchBenefits } = useBenefitStore();

  React.useEffect(() => {
    fetchBenefits();
  }, [fetchBenefits]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Benefits</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <BenefitsList benefits={benefits} />
          <EligibilityChecker eligibility={eligibility} />
        </div>
      )}
    </div>
  );
};

export default Benefits;
