import React from 'react';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const DashboardStats = () => {
  const stats = [
    { label: 'Active Applications', value: '3', icon: FileText, color: 'blue' },
    { label: 'Pending Reviews', value: '2', icon: Clock, color: 'yellow' },
    { label: 'Approved Benefits', value: '4', icon: CheckCircle, color: 'green' },
    { label: 'Action Required', value: '1', icon: AlertCircle, color: 'red' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <Icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
