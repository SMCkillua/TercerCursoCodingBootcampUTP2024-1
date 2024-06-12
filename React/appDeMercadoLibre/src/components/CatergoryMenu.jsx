import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326')
      .then(response => {
        const categories = response.data.available_filters.find(filter => filter.id === 'category').values;
        setCategories(categories);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="category-menu">
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <button onClick={() => toggleExpand(category.id)}>
              {expanded[category.id] ? '-' : '+'}
            </button>
            <Link to={`/${category.id}`}>{category.name}</Link>
            {expanded[category.id] && category.path_from_root.length > 1 && (
              <ul>
                {category.path_from_root.map(subcategory => (
                  <li key={subcategory.id}>
                    <Link to={`/${subcategory.id}`}>{subcategory.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
