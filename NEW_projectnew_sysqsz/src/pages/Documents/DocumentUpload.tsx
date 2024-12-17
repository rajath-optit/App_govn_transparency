import React, { useState } from 'react';
import { FileText } from 'lucide-react';

interface DocumentUploadProps {
  onUpload: (file: File) => void;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Upload Document</h3>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <label className="cursor-pointer">
          <FileText className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          <span className="ml-2 text-sm text-gray-500">
            {selectedFile ? selectedFile.name : 'Select a file'}
          </span>
        </label>
        <button
          onClick={handleUpload}
          className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Upload
        </button>
      </div>
    </div>
  );
};
