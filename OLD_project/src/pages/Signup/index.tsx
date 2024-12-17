import React from 'react';
import { SignupForm } from './SignupForm';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';
import { useAuthStore } from '../../store/authStore';

const Signup = () => {
  const { signup, isLoading, error } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join the Government Services Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}
          <SignupForm onSubmit={signup} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Signup;