import React from 'react';
import Table from '../Table';

const tableAHeadings = ['title', 'genre', 'year'];
const tableARows = [
  ['The Conjuring', 'Horror, Mystery, Thriller', '2013'],
  ['The Dark and the Wicked', 'Horror', '2020'],
  ['Pulp Fiction', 'Crime, Drama', '1994'],
];
const tableBHeadings = ['title', 'year'];
const tableBRows = [
  ['The Conjuring', '2013'],
  ['The Dark and the Wicked', '2020'],
  ['Pulp Fiction', '1994'],
];

const Select = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Retrieving Data with SELECT</h2>
          </div>
          <div className="select">
            <section>
              <article>
                <h3>SELECT In Use</h3>
                <p>Retrieve data from a table by using the keyword, SELECT.</p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        Note that we are also using the FROM keyword here.
                      </span>
                    </li>
                    <li>
                      <span>
                        The FROM keyword specifies the table to select data
                        from.
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <h4>Example 1: Retrieve all data from a table</h4>
                <p>
                  We can retrieve ALL of the data from the movies table using
                  SELECT.
                </p>
                <div className="tableContainer">
                  <h4>Table: movies</h4>
                  <Table
                    tableHeadings={tableAHeadings}
                    tableRows={tableARows}
                  />
                </div>
                <p>Retrieve ALL data from movies by running:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM movies;</span>
                </div>
                <p>The result will be:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={tableAHeadings}
                    tableRows={tableARows}
                  />
                </div>
              </article>
              <article>
                <h4>Example 2: Retrieve data by column/property name</h4>
                <p>
                  We can retrieve table data by column/property name as well.
                </p>
                <p>
                  We do this by specifying the column names after the SELECT
                  keyword.
                </p>
                <p>For example, we can run:</p>
                <div className="queryContainer">
                  <span>SELECT title, year FROM movies;</span>
                </div>
                <p>and the result will be:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={tableBHeadings}
                    tableRows={tableBRows}
                  />
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Select;
