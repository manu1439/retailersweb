import React from 'react';

function Catalog() {
  // Sample catalog items
  const items = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 }
  ];

  return (
    <div>
      <h2>Catalog</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
