import { useState } from 'react';
import {
  Routes, Route, Link, Navigate,
} from 'react-router-dom';
import './App.scss';
import Categories from './Pages/categories';
import Category from './Pages/category';
import PageNotFound from './Pages/PageNotFound';
import Joke from './Pages/jokeinfo';
import { useGetAllCategoriesQuery } from './services/jokes';

const App = () => {
  const { isError, data } = useGetAllCategoriesQuery(undefined);
  const [activeIndex, setActiveIndex] = useState(0);

  if (isError) {
    return <h1>ERROR</h1>;
  }

  const ifSelected = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <nav className="nav-options">
        {data?.categories.map((item, index) => (
          <Link
            to={`/categories/${item}`}
            className={'nav-text' && activeIndex === index ? 'active' : 'unactive'}
            key={item}
            onClick={() => ifSelected(index)}
          >
            {item}

          </Link>
        ))}
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Navigate to="/categories" />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/categories/:id/:id" element={<Joke />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
export default App;
