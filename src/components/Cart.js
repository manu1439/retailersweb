import React, { useState } from 'react';

function Cart() {
  // Sample cart items state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 10.99 },
    { id: 2, name: 'Product 2', quantity: 1, price: 19.99 }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
