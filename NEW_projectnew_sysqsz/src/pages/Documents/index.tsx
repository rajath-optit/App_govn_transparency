import React from 'react';
import { DocumentUpload } from './DocumentUpload';
import { DocumentList } from './DocumentList';
import { useDocumentStore } from '../../store/documentStore';

const Documents = () => {
  const { documents, isLoading, uploadDocument } = useDocumentStore();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
      <DocumentUpload onUpload={uploadDocument} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DocumentList documents={documents} />
      )}
    </div>
  );
};

export default Documents;
