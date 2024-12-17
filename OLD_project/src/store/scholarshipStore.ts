import { create } from 'zustand';
import { Scholarship } from '../types/scholarship';

interface ScholarshipState {
  scholarships: Scholarship[];
  isLoading: boolean;
  error: string | null;
}

export const useScholarshipStore = create<ScholarshipState & {
  fetchScholarships: () => Promise<void>;
  submitApplication: (data: Partial<Scholarship>) => Promise<void>;
  uploadDocument: (scholarshipId: string, file: File) => Promise<void>;
}>((set) => ({
  scholarships: [],
  isLoading: false,
  error: null,

  fetchScholarships: async () => {
    set({ isLoading: true });
    try {
      // API call would go here
      const scholarships: Scholarship[] = [];
      set({ scholarships, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch scholarships', isLoading: false });
    }
  },

  submitApplication: async (data) => {
    // Implementation for application submission
  },

  uploadDocument: async (scholarshipId, file) => {
    // Implementation for document upload
  },
}));
