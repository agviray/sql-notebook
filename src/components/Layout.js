import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <ul>
        <Link to="table-of-contents">Table of Contents</Link>
        <Link to="page-one">Page One</Link>
        <Link to="page-two">Page Two</Link>
        <Link to="page-three">Page Three</Link>
      </ul> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
