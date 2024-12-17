import React from 'react';
import { Benefit } from '../../types/benefits';

interface BenefitsListProps {
  benefits: Benefit[];
}

export const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Available Benefits</h3>
      <div className="space-y-4">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{benefit.type}</h4>
                <p className="text-gray-600 mt-1">{benefit.status}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Amount: ${benefit.amount.toLocaleString()}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    benefit.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                    benefit.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {benefit.status.charAt(0).toUpperCase() + benefit.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Apply for this benefit"
                >
                  <i className="fas fa-edit text-gray-500 hover:text-gray-700"></i>
                </button>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="View benefit details"
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
