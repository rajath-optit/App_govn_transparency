import React from 'react';
import { Document } from '../../types';

interface DocumentListProps {
  documents: Document[];
}

export const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
      <div className="space-y-4">
        {documents.map((document) => (
          <div key={document.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{document.title}</h4>
                <p className="text-gray-600 mt-1">{document.type}</p>
              </div>
              <div className="flex space-x-2">
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="View document"
                >
                  <i className="fas fa-eye text-gray-500 hover:text-gray-700"></i>
                </a>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Delete document"
                >
                  <i className="fas fa-trash text-gray-500 hover:text-gray-700"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
