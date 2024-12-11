import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  // Mock product data
  const product = {
    id: id,
    name: 'Sample Product',
    description: 'This is a detailed description of the product.',
    price: '99.99',
    image: 'https://via.placeholder.com/400',
  };

  return (
    <div className="flex justify-center items-center p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <img className="w-full rounded-lg mb-4" src={product.image} alt={product.name} />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-green-600">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductPage;
