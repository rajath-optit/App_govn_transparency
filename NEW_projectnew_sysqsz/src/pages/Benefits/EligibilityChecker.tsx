import React from 'react';
import { Eligibility } from '../../types/benefits';

interface EligibilityCheckerProps {
  eligibility: Eligibility;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ eligibility }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Eligibility Checker</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">Eligibility Status</h4>
            <p className="text-gray-600 mt-1">{eligibility.isEligible ? 'Eligible' : 'Not Eligible'}</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Check eligibility"
            >
              <i className="fas fa-check text-gray-500 hover:text-gray-700"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">Missing Documents</h4>
            <ul className="list-disc pl-4">
              {eligibility.missingDocuments.map((document) => (
                <li key={document}>{document}</li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Upload documents"
            >
              <i className="fas fa-upload text-gray-500 hover:text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
