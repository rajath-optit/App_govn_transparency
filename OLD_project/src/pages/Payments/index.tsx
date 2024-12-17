import React from 'react';
import { PaymentHistory } from './PaymentHistory';
import { PaymentVerification } from './PaymentVerification';

const Payments = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>
      <PaymentVerification />
      <PaymentHistory />
    </div>
  );
};

export default Payments;
