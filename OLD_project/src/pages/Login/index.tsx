import React from 'react';
import { LoginForm } from './LoginForm';
import { useAuthStore } from '../../store/authStore';

const Login = () => {
  const { login, isLoading, error } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Government Services Portal
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 text-red-600 text-sm">{error}</div>
          )}
          <LoginForm onSubmit={login} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Login;
