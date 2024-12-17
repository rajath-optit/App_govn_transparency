export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'citizen' | 'admin' | 'worker';
  biometricEnabled: boolean;
  twoFactorEnabled: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  biometricData?: string;
}
