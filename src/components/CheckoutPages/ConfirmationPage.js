import React from 'react';

const ConfirmationPage = ({ orderDetails }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>Order Details:</p>
      <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
    </div>
  );
};

export default ConfirmationPage;
