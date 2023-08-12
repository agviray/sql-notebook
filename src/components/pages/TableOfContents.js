import React from 'react';
import { Link } from 'react-router-dom';

const tableOfContentsContent = [
  {
    name: 'General SQL Info',
    path: '../gen-sql',
  },
  {
    name: 'Keyword/Clause - CREATE TABLE',
    path: '../create-table',
  },
  {
    name: 'Keyword/Clause - INSERT INTO',
    path: '../insert-into',
  },
  {
    name: 'Keyword/Clause - ORDER BY',
    path: '../order-by',
  },
  {
    name: 'Keyword/Clause - SELECT',
    path: '../select',
  },
  {
    name: 'Queries with Constraints',
    path: '../queries-with-constraints',
  },
];

const TableOfContents = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Table of Contents</h2>
          </div>
          <div className="mainContentContainer">
            <div className="tableOfContents">
              <ul>
                {tableOfContentsContent.map(({ name, path }, index) => (
                  <li key={index}>
                    <span></span>
                    <Link to={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableOfContents;
