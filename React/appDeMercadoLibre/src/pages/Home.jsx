import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="home">
      <h1>Productos de Don Miguel</h1>
      <ProductList />
    </div>
  );
};

export default Home;
