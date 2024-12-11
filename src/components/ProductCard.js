import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.name} />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-4">Price: ${product.price}</p>
      <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
