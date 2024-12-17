import React from 'react';
import { Payment } from '../../types/payments';

interface PaymentVerificationProps {
  payments: Payment[];
}

export const PaymentVerification: React.FC<PaymentVerificationProps> = ({ payments }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Payment Verification</h3>
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{payment.type}</h4>
                <p className="text-gray-600 mt-1">{payment.status}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Amount: ${payment.amount.toLocaleString()}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    payment.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                    payment.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Verify payment"
                >
                  <i className="fas fa-check text-gray-500 hover:text-gray-700"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
