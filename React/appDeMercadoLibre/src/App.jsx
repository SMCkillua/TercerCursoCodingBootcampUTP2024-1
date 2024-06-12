import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CategoryMenu from './components/CatergoryMenu';

const App = () => {
  return (
    <div className="app">
      <CategoryMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
