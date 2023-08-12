import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../sass/main.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import TableOfContents from './pages/TableOfContents';
import GenSqlInfo from './pages/GenSqlInfo';
import CreateTable from './pages/CreateTable';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="table-of-contents" element={<TableOfContents />} />
        <Route path="gen-sql" element={<GenSqlInfo />} />
        <Route path="create-table" element={<CreateTable />} />
      </Route>
    </Routes>
  );
};

export default App;
