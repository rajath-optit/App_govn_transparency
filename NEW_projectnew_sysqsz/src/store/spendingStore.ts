import { create } from 'zustand';
import { SpendingData } from '../types';

interface SpendingState {
  spendingData: SpendingData[];
  isLoading: boolean;
  error: string | null;
}

export const useSpendingStore = create<SpendingState & {
  fetchSpendingData: () => Promise<void>;
  addSpendingData: (data: SpendingData) => void;
}>((set) => ({
  spendingData: [],
  isLoading: false,
  error: null,

  fetchSpendingData: async () => {
    set({ isLoading: true });
    try {
      // API call would go here
      const spendingData: SpendingData[] = [];
      set({ spendingData, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch spending data', isLoading: false });
    }
  },

  addSpendingData: (data) => {
    set((state) => ({ spendingData: [...state.spendingData, data] }));
  },
}));
