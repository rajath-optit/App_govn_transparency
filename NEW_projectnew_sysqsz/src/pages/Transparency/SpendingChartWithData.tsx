import React from 'react';
import { SpendingChart } from './SpendingChart';
import { useSpendingStore } from '../../store/spendingStore';

const SpendingChartWithData = () => {
  const { spendingData, isLoading, fetchSpendingData } = useSpendingStore();

  React.useEffect(() => {
    fetchSpendingData();
  }, [fetchSpendingData]);

  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <SpendingChart data={spendingData} />
      )}
    </div>
  );
};

export default SpendingChartWithData;
