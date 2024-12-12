import { useState } from 'react';
import { EligibilityResult } from '@/types/services';

export const useEligibility = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const checkEligibility = async (programId: string) => {
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResult({
        eligible: Math.random() > 0.5,
        requirements: [
          'Valid government ID',
          'Proof of residence',
          'Income verification',
          'Tax returns for the past 2 years'
        ]
      });
    } catch (error) {
      console.error('Error checking eligibility:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { checkEligibility, isLoading, result };
};