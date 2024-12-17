import React from 'react';
import { TaxRedemptionData } from '../../types';

interface TaxRedemptionProps {
  taxRedemptionData: TaxRedemptionData[];
}

export const TaxRedemption: React.FC<TaxRedemptionProps> = ({ taxRedemptionData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Tax Redemption</h3>
      <div className="space-y-4">
        {taxRedemptionData.map((taxRedemption) => (
          <div key={taxRedemption.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{taxRedemption.date}</h4>
                <p className="text-gray-600 mt-1">{taxRedemption.name}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Amount: ${taxRedemption.amount.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="View tax redemption details"
                >
                  <i className="fas fa-eye text-gray-500 hover:text-gray-700"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
