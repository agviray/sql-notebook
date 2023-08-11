import React from 'react';
import { Link } from 'react-router-dom';

const tableOfContentsContent = [
  {
    name: 'General SQL Info',
    path: 'general-sql-info',
  },
  {
    name: 'Queries with Constraints',
    path: 'queries-with-constraints',
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
