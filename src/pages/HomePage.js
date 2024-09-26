import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ products }) => (
  <div>
    <h2>Welcome to Coffee Shop</h2>
    <ProductList products={products} />
  </div>
);

export default HomePage;