import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, addToCart } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-4">£{product.price}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => addToCart(product.id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
