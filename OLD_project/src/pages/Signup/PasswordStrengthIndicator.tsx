import React from 'react';
import { PasswordValidation } from '../../types/auth';
import { Check, X } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  validation: PasswordValidation;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ validation }) => {
  const requirements = [
    { key: 'hasMinLength', label: 'At least 8 characters' },
    { key: 'hasUpperCase', label: 'One uppercase letter' },
    { key: 'hasLowerCase', label: 'One lowercase letter' },
    { key: 'hasNumber', label: 'One number' },
    { key: 'hasSpecialChar', label: 'One special character' },
  ];

  return (
    <div className="mt-2 space-y-2">
      <p className="text-sm font-medium text-gray-700">Password requirements:</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {requirements.map(({ key, label }) => (
          <div
            key={key}
            className={`flex items-center space-x-2 text-sm ${
              validation[key as keyof PasswordValidation]
                ? 'text-green-600'
                : 'text-gray-500'
            }`}
          >
            {validation[key as keyof PasswordValidation] ? (
              <Check className="w-4 h-4" />
            ) : (
              <X className="w-4 h-4" />
            )}
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};