import React from 'react';
import { User } from '../../types';

interface NotificationPreferencesProps {
  user: User;
}

export const NotificationPreferences: React.FC<NotificationPreferencesProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">Email Notifications</h4>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Edit email notifications"
            >
              <i className="fas fa-edit text-gray-500 hover:text-gray-700"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">Push Notifications</h4>
            <p className="text-gray-600 mt-1">Enabled</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Toggle push notifications"
            >
              <i className="fas fa-toggle-on text-gray-500 hover:text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
