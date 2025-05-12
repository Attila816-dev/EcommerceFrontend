import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CategoryList from './components/CategoryList';

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-200 p-4 flex gap-4">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/products" className="text-blue-600">Products</Link>
        <Link to="/categories" className="text-blue-600">Categories</Link>
        <Link to="/cart" className="text-blue-600">Cart</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<h2 className="text-2xl">Welcome to My E-commerce Store</h2>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
