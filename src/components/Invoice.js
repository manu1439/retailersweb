import React from 'react';

function Invoice() {
  // Sample invoice data
  const invoice = {
    invoiceNumber: 'INV-001',
    date: '2024-06-01',
    customerName: 'John Doe',
    items: [
      { id: 1, description: 'Product 1', quantity: 2, price: 10.99 },
      { id: 2, description: 'Product 2', quantity: 1, price: 19.99 }
    ]
  };

  const totalAmount = invoice.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Invoice</h2>
      <p>Invoice Number: {invoice.invoiceNumber}</p>
      <p>Date: {invoice.date}</p>
      <p>Customer: {invoice.customerName}</p>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map(item => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3"><strong>Total</strong></td>
            <td><strong>${totalAmount.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
