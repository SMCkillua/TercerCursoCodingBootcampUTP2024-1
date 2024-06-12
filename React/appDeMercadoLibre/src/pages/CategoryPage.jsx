import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div className="category-page">
      <h1>Productos en la categoría {categoryId}</h1>
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default CategoryPage;
