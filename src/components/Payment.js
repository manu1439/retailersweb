import React, { useState } from 'react';

function Payment() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setPaymentData({...paymentData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log('Payment data:', paymentData);
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Cardholder Name:
          <input name="cardName" value={paymentData.cardName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Expiry Date:
          <input name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} placeholder="MM/YY" required />
        </label>
        <br />
        <label>
          CVV:
          <input name="cvv" value={paymentData.cvv} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Payment;
