import { create } from 'zustand';
import { Payment } from '../types/payments';

interface PaymentState {
  payments: Payment[];
  isLoading: boolean;
  error: string | null;
}

export const usePaymentStore = create<PaymentState & {
  fetchPayments: () => Promise<void>;
  verifyPayment: (id: string) => Promise<void>;
}>((set) => ({
  payments: [],
  isLoading: false,
  error: null,

  fetchPayments: async () => {
    set({ isLoading: true });
    try {
      // API call would go here
      const payments: Payment[] = [];
      set({ payments, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch payments', isLoading: false });
    }
  },

  verifyPayment: async (id) => {
    // Implementation for verifying a payment
  },
}));
