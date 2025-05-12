import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        getCategories()
            .then(res => {
                setCategories(res.data);
          })
        .catch(console.error);
    }, []);
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map(cat => (
            <li key={cat.id} className="mb-2">
              <div className="font-semibold">{cat.name}</div>
              <ul className="ml-4 list-disc">
                {(cat.children || []).map(child => (
                  <li key={child.id}>
                    <button
                      className="text-blue-600 underline"
                      onClick={() => navigate(`/products?categoryId=${child.id}`)}
                    >{child.name}</button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default CategoryList;
