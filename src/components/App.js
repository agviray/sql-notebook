import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../sass/main.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import TableOfContents from './pages/TableOfContents';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="table-of-contents" element={<TableOfContents />} />
      </Route>
    </Routes>
  );
};

export default App;
