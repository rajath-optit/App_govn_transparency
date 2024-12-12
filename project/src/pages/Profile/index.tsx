import React from 'react';
import { PersonalInfo } from './PersonalInfo';
import { SecuritySettings } from './SecuritySettings';
import { NotificationPreferences } from './NotificationPreferences';

const Profile = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
      <div className="grid grid-cols-1 gap-6">
        <PersonalInfo />
        <SecuritySettings />
        <NotificationPreferences />
      </div>
    </div>
  );
};

export default Profile;