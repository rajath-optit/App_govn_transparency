import React from 'react';
import { PaymentHistory } from './PaymentHistory';
import { PaymentVerification } from './PaymentVerification';
import { usePaymentStore } from '../../store/paymentStore';

const Payments = () => {
  const { payments, isLoading, fetchPayments } = usePaymentStore();

  React.useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <PaymentHistory payments={payments} />
          <PaymentVerification payments={payments} />
        </div>
      )}
    </div>
  );
};

export default Payments;
