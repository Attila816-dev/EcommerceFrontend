import React, { useEffect, useState } from 'react';
import { getCart } from '../services/api';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCart().then(res =>
      {
        setTotal(res.data.reduce((acc, item) => acc + item.price * item.quantity, 0));
         setItems(res.data);
      })
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="mb-4">
          {items.map((item, idx) => (
            <li key={idx} className="border-b py-1">{item.name} - Quantity: {item.quantity} - £{item.price.toFixed(2)}</li>
          ))}
        </ul>
      )}
      <p className="font-semibold">Total: £{total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
