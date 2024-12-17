import React from 'react';
import { User } from '../../types';

interface PersonalInfoProps {
  user: User;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">Name</h4>
            <p className="text-gray-600 mt-1">{user.firstName} {user.lastName}</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Edit name"
            >
              <i className="fas fa-edit text-gray-500 hover:text-gray-700"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">Email</h4>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Edit email"
            >
              <i className="fas fa-edit text-gray-500 hover:text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
