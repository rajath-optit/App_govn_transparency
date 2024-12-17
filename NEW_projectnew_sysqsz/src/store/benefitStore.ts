import { create } from 'zustand';
import { Benefit } from '../types/benefits';
import { Eligibility } from '../types/benefits';

interface BenefitState {
  benefits: Benefit[];
  eligibility: Eligibility;
  isLoading: boolean;
  error: string | null;
}

export const useBenefitStore = create<BenefitState & {
  fetchBenefits: () => Promise<void>;
  checkEligibility: () => Promise<void>;
}>((set) => ({
  benefits: [],
  eligibility: {
    benefitType: '',
    isEligible: false,
    requirements: [],
    missingDocuments: [],
  },
  isLoading: false,
  error: null,

  fetchBenefits: async () => {
    set({ isLoading: true });
    try {
      // API call would go here
      const benefits: Benefit[] = [];
      set({ benefits, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch benefits', isLoading: false });
    }
  },

  checkEligibility: async () => {
    // Implementation for checking eligibility
  },
}));
