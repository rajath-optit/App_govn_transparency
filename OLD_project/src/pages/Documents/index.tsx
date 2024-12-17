import React from 'react';
import { DocumentUpload } from './DocumentUpload';
import { DocumentList } from './DocumentList';

const Documents = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
      <DocumentUpload />
      <DocumentList />
    </div>
  );
};

export default Documents;
