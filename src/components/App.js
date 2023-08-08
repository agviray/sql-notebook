import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../sass/main.css';
import Layout from './Layout';
import TableOfContents from './pages/TableOfContents';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="table-of-contents" element={<TableOfContents />} />
        <Route path="page-one" element={<PageOne />} />
        <Route path="page-two" element={<PageTwo />} />
        <Route path="page-three" element={<PageThree />} />
      </Route>
    </Routes>
  );
};

export default App;
