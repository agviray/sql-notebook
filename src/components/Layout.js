import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="appWrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
