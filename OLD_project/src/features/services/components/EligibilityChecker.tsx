import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Program } from '@/types/services';
import { useEligibility } from '@/hooks/useEligibility';

interface EligibilityCheckerProps {
  programs: Program[];
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ programs }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const { checkEligibility, isLoading, result } = useEligibility();

  const handleCheck = async () => {
    if (selectedProgram) {
      await checkEligibility(selectedProgram);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Program Eligibility Checker</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700">
            Select Program
          </label>
          <select
            id="program"
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a program</option>
            {programs.map(program => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleCheck}
          disabled={!selectedProgram || isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Checking...' : 'Check Eligibility'}
        </button>

        {result && (
          <div className={`mt-4 p-4 rounded-lg ${
            result.eligible ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <div className="flex items-center">
              {result.eligible ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className={result.eligible ? 'text-green-700' : 'text-red-700'}>
                {result.eligible ? 'You are eligible!' : 'Not eligible'}
              </span>
            </div>
            {result.requirements && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700">Requirements:</p>
                <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
                  {result.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};