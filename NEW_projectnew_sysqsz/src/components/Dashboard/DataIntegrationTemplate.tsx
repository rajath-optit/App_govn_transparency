import React, { useState } from 'react';

interface DataIntegrationTemplateProps {
  onAddSpendingData: (data: SpendingData) => void;
}

export const DataIntegrationTemplate: React.FC<DataIntegrationTemplateProps> = ({ onAddSpendingData }) => {
  const [government, setGovernment] = useState('');
  const [year, setYear] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const spendingData: SpendingData = {
      government,
      year: parseInt(year),
      amount: parseFloat(amount),
    };
    onAddSpendingData(spendingData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Data Integration Template</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="government" className="block text-sm font-medium text-gray-700">
            Government
          </label>
          <div className="mt-1">
            <input
              id="government"
              name="government"
              type="text"
              required
              value={government}
              onChange={(e) => setGovernment(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <div className="mt-1">
            <input
              id="year"
              name="year"
              type="number"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <div className="mt-1">
            <input
              id="amount"
              name="amount"
              type="number"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Add Spending Data
          </button>
        </div>
      </form>
    </div>
  );
};
