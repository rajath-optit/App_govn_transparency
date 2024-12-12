import React from 'react';
import { TrendingUp, Users, Building, Landmark } from 'lucide-react';
import { ImpactData } from '@/types/metrics';

interface ImpactMetricsProps {
  data: ImpactData;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ data }) => {
  const metrics = [
    {
      label: 'Economic Growth',
      value: `${data.economicGrowth}%`,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Citizens Benefited',
      value: data.citizensBenefited.toLocaleString(),
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Infrastructure',
      value: data.infrastructureScore,
      icon: Building,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Public Services',
      value: data.publicServiceScore,
      icon: Landmark,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Impact Assessment</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map(metric => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="text-center">
              <div className={`mx-auto w-12 h-12 ${metric.bgColor} rounded-full flex items-center justify-center mb-2`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <p className="text-sm text-gray-500">{metric.label}</p>
              <p className={`text-lg font-semibold ${metric.color}`}>{metric.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};