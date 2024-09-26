import React from 'react';

const Cart = ({ cartItems }) => (
  <div>
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;