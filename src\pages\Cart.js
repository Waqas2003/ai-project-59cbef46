import React from 'react';
import { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;