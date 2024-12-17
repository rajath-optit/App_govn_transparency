import { create } from 'zustand';
import { AuthState, User, LoginCredentials } from '../types/auth';

export const useAuthStore = create<AuthState & {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  enableTwoFactor: () => Promise<void>;
  enableBiometric: () => Promise<void>;
}>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // API call would go here
      const user: User = {
        id: '1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        role: 'citizen',
        biometricEnabled: false,
        twoFactorEnabled: false,
      };
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: 'Login failed', isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  enableTwoFactor: async () => {
    // Implementation for 2FA setup
  },

  enableBiometric: async () => {
    // Implementation for biometric setup
  },
}));
