import React from 'react';
import Table from '../Table';

// - Values for movies tables.
const moviesHeadings = ['title', 'genre', 'year'];
const moviesTableARows = [
  ['The Conjuring', 'Horror, Mystery, Thriller', '2013'],
  ['Akira', 'Anime, Action, Drama', '1988'],
  ['The Dark and the Wicked', 'Horror', '2020'],
  ['Pulp Fiction', 'Crime, Drama', '1994'],
];
const moviesTableBRows = [
  ['Akira', 'Anime, Action, Drama', '1988'],
  ['Pulp Fiction', 'Crime, Drama', '1994'],
  ['The Conjuring', 'Horror, Mystery, Thriller', '2013'],
  ['The Dark and the Wicked', 'Horror', '2020'],
];

// - Values for places tables.
const placesTableHeadings = ['Id', 'Country', 'City'];

const placesTableARows = [
  ['1', 'Japan', 'Tokyo'],
  ['2', 'Canada', 'Toronto'],
  ['3', 'United States', 'Houston'],
  ['4', 'Philippines', 'Manila'],
];

const placesTableBRows = [
  ['2', 'Canada', 'Toronto'],
  ['1', 'Japan', 'Tokyo'],
  ['4', 'Philippines', 'Manila'],
  ['3', 'United States', 'Houston'],
];
const placesTableCRows = [
  ['4', 'Philippines', 'Manila'],
  ['3', 'United States', 'Houston'],
  ['2', 'Canada', 'Toronto'],
  ['1', 'Japan', 'Tokyo'],
];

const OrderBy = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Arrange Table Records with ORDER BY</h2>
          </div>
          <div className="orderBy">
            <section>
              <article>
                <h3>ORDER BY In Use</h3>
                <p>
                  Data in databases are not always organized in a specific
                  order, and retrieving data from an unorganized database will
                  also return unorganized results. This is where ORDER BY can
                  help.
                </p>
                <p>
                  We can arrange retrieved data using the ORDER BY clause in a
                  SELECT query.
                </p>
              </article>
              <article>
                <h4>
                  Example 1: Displaying retrieved data in increasing/ascending
                  order
                </h4>
                <p>
                  We use ORDER BY with or without ASC, to specify the order of
                  our retrieved data in increasing (ascending) order.
                </p>
                <p>
                  Numerical values will be arranged from least to greatest, and
                  letter values will be arranged from A to Z.
                </p>
                <div className="tableContainer">
                  <h4>Table: movies</h4>
                  <Table
                    tableHeadings={moviesHeadings}
                    tableRows={moviesTableARows}
                  />
                </div>
                <p>We can run:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM movies</span>
                  <span>ORDER BY year;</span>
                </div>
                <p>- OR -</p>
                <div className="queryContainer">
                  <span>SELECT * FROM movies</span>
                  <span>ORDER BY year ASC;</span>
                </div>
                <p>and the result will be:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={moviesHeadings}
                    tableRows={moviesTableBRows}
                  />
                </div>
                <p>
                  Even if we don't use ASC in our query, numerical values will
                  be arranged from least to greatest/ascending order by default.
                </p>
                <p>
                  If the values began with a letter, then the values would be
                  arranged in alphabetical order, from A to Z.
                </p>
                <p>For example, running:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM movies</span>
                  <span>ORDER BY title ASC;</span>
                </div>
                <p>would give us:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={moviesHeadings}
                    tableRows={moviesTableBRows}
                  />
                </div>
              </article>
              <article>
                <h4>
                  Example 2: Displaying retrieved data in decreasing
                  (descending) order
                </h4>
                <p>
                  We use ORDER BY with DESC to display our retrieved results in
                  decreasing (descending) order.
                </p>
                <p>
                  Numerical values will be arranged from greatest to least, and
                  letter values will be arranged from Z to A.
                </p>
                <div className="tableContainer">
                  <h4>Table: places</h4>
                  <Table
                    tableHeadings={placesTableHeadings}
                    tableRows={placesTableARows}
                  />
                </div>
                <p>
                  Using the places table above, we can run the following query:
                </p>
                <div className="queryContainer">
                  <span>SELECT * FROM places</span>
                  <span>ORDER BY city DESC;</span>
                </div>
                <p>and the result would be:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={placesTableHeadings}
                    tableRows={placesTableBRows}
                  />
                </div>
                <p>Running this query:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM places</span>
                  <span>ORDER BY id DESC;</span>
                </div>
                <p>would give us this result:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={placesTableHeadings}
                    tableRows={placesTableCRows}
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

export default OrderBy;
