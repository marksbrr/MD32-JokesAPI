import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Categories = () => (
  <>
    <div>
      <h1 className="bold-text">Pick a category to enjoy some jokes!</h1>
      <Outlet />
    </div>
  </>

);

export default Categories;
