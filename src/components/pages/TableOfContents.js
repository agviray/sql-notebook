import React from 'react';
import { Link } from 'react-router-dom';

const tableOfContentsContent = [
  {
    name: 'General SQL Info',
    path: '../gen-sql',
  },
  {
    name: 'Keywords and Clauses - CREATE TABLE',
    path: '../create-table',
  },
  {
    name: 'Keywords and Clauses - DELETE',
    path: '../delete',
  },
  {
    name: 'Keywords and Clauses - INSERT INTO',
    path: '../insert-into',
  },
  {
    name: 'Keywords and Clauses - ORDER BY',
    path: '../order-by',
  },
  {
    name: 'Keywords and Clauses - UPDATE',
    path: '../update',
  },
  {
    name: 'Keywords and Clauses - SELECT',
    path: '../select',
  },
  {
    name: 'Keywords and Clauses - WHERE',
    path: '../where',
  },
  {
    name: 'Operators - IN',
    path: '../in-operator',
  },
  {
    name: 'Queries with Expressions (and the AS keyword)',
    path: '../queries-with-expressions',
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
                    <Link to={path}>
                      <span>{name}</span>
                    </Link>
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
