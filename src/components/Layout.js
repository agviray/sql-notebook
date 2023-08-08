import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>SQL Notebook</h1>
      <ul>
        <Link to="table-of-contents">Table of Contents</Link>
        <Link to="page-one">Page One</Link>
        <Link to="page-two">Page Two</Link>
        <Link to="page-three">Page Three</Link>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
