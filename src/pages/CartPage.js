import React from 'react';

function CartPage() {
  return (
    <div className="flex justify-center items-center p-8 bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
        <p className="text-gray-700">Your cart is empty. Start shopping now!</p>
      </div>
    </div>
  );
}

export default CartPage;
