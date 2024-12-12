import React from 'react';
import { ScholarshipList } from './ScholarshipList';
import { useScholarshipStore } from '../../store/scholarshipStore';

const Scholarships = () => {
  const { scholarships, isLoading, fetchScholarships } = useScholarshipStore();

  React.useEffect(() => {
    fetchScholarships();
  }, [fetchScholarships]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Scholarships</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ScholarshipList scholarships={scholarships} />
      )}
    </div>
  );
};

export default Scholarships;