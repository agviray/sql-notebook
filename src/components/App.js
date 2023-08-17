import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../sass/main.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import TableOfContents from './pages/TableOfContents';
import GenSqlInfo from './pages/GenSqlInfo';
import CreateTable from './pages/CreateTable';
import Delete from './pages/Delete';
import InsertInto from './pages/InsertInto';
import OrderBy from './pages/OrderBy';
import QueriesWithExpressions from './pages/QueriesWithExpressions';
import Update from './pages/Update';
import Select from './pages/Select';
import Where from './pages/Where';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="table-of-contents" element={<TableOfContents />} />
        <Route path="gen-sql" element={<GenSqlInfo />} />
        <Route path="create-table" element={<CreateTable />} />
        <Route path="delete" element={<Delete />} />
        <Route path="insert-into" element={<InsertInto />} />
        <Route path="order-by" element={<OrderBy />} />
        <Route
          path="queries-with-expressions"
          element={<QueriesWithExpressions />}
        />
        <Route path="select" element={<Select />} />
        <Route path="update" element={<Update />} />
        <Route path="where" element={<Where />} />
      </Route>
    </Routes>
  );
};

export default App;
