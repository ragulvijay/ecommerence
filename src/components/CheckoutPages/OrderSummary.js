import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(paymentData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cardNumber"
        value={paymentData.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
      />
      <input
        type="text"
        name="expiryDate"
        value={paymentData.expiryDate}
        onChange={handleChange}
        placeholder="Expiry Date"
        required
      />
      <input
        type="text"
        name="cvv"
        value={paymentData.cvv}
        onChange={handleChange}
        placeholder="CVV"
        required
      />
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
