export interface ImpactData {
  economicGrowth: number;
  citizensBenefited: number;
  infrastructureScore: string;
  publicServiceScore: string;
}

export interface SpendingData {
  date: string;
  amount: number;
  category?: string;
  department?: string;
}

export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}