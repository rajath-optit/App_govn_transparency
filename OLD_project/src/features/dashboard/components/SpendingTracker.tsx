import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/utils/formatters';
import { SpendingData } from '@/types/financial';

interface SpendingTrackerProps {
  data: SpendingData[];
  period: 'daily' | 'monthly' | 'yearly';
}

export const SpendingTracker: React.FC<SpendingTrackerProps> = ({ data, period }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Government Spending Tracker</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#2563eb" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Total Spent</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(data.reduce((acc, curr) => acc + curr.amount, 0))}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Average</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(data.reduce((acc, curr) => acc + curr.amount, 0) / data.length)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Period</p>
          <p className="text-lg font-semibold text-gray-900 capitalize">{period}</p>
        </div>
      </div>
    </div>
  );
};