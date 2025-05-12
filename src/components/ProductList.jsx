import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, addToCart } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    getProducts().then(res => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
            <p className="text-sm text-gray-800 font-semibold">£{p.price.toFixed(2)}</p>
            <Link to={`/products/${p.id}`} className="text-blue-600 underline text-sm">
              View Details
            </Link>
            <button
              className="block mt-2 px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => addToCart(p.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
