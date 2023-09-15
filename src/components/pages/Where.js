import React from 'react';
import Table from '../Table';

// - Table data for movies table.
const moviesTableHeadings = ['title', 'genre', 'year'];
const moviesTableARows = [
  ['The Conjuring', 'Horror, Mystery, Thriller', '2013'],
  ['Akira', 'Anime, Action, Drama', '1988'],
  ['The Dark and the Wicked', 'Horror', '2020'],
  ['Pulp Fiction', 'Crime, Drama', '1994'],
  ['Con Air', 'Action, Crime, Thriller', '1997'],
  ['Let the Right One In', 'Drama, Fantasy, Horror', '2008'],
  ['The Witch', 'Drama, Fantasy, Horror', '2015'],
];
const moviesTableBRows = [
  ['Akira', 'Anime, Action, Drama', '1988'],
  ['Pulp Fiction', 'Crime, Drama', '1994'],
  ['Con Air', 'Action, Crime, Thriller', '1997'],
];

// - Table data for the_bobs table.
const theBobsTableHeadings = ['Id', 'Name', 'Age'];
const theBobsTableARows = [
  ['25', 'Bob', '18'],
  ['11', 'Bob', '38'],
  ['12', 'Bob', '32'],
  ['13', 'Bob', '24'],
  ['23', 'Bob', '29'],
  ['24', 'Bob', '41'],
  ['27', 'Bob', '19'],
];
const theBobsTableBRows = [['23', 'Bob', '29']];

const Where = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Filtering with WHERE</h2>
          </div>
          <div className="where">
            <section>
              <article>
                <h3>WHERE In Use</h3>
                <p>
                  Filter records that match a specified condition using the
                  keyword, WHERE.
                </p>
                <p>
                  WHERE can be used together with different operators to filter
                  records. Operators include some of the following as well as
                  many others:
                </p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>= (equal to)</span>
                    </li>
                    <li>
                      <span>!= (not equal to)</span>
                    </li>
                    <li>
                      <span>{'>'} (greater than)</span>
                    </li>
                    <li>
                      <span>{'<'} (less than)</span>
                    </li>
                    <li>
                      <span>IN (...)</span>
                    </li>
                    <li>
                      <span>LIKE</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <h4>Example 1: Filtering records with WHERE</h4>
                <div className="tableContainer">
                  <h4>Table: movies</h4>
                  <Table
                    tableHeadings={moviesTableHeadings}
                    tableRows={moviesTableARows}
                  />
                </div>
                <p>
                  Using the movies table, we can use WHERE to filter movies
                  released in the 90's only.
                </p>
                <p>Our query would look like:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM movies</span>
                  <span>WHERE year {'<'} 2000;</span>
                </div>
                <p>And the returned result would show:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={moviesTableHeadings}
                    tableRows={moviesTableBRows}
                  />
                </div>
              </article>
              <article>
                <h4>
                  Example 2: Filtering records with WHERE Using More Than One
                  Condition
                </h4>
                <div className="tableContainer">
                  <h4>Table: the_bobs</h4>
                  <Table
                    tableHeadings={theBobsTableHeadings}
                    tableRows={theBobsTableARows}
                  />
                </div>
                <p>
                  We can also filter records with WHERE even if we have multiple
                  conditions.
                </p>
                <p>
                  Let's write a query that uses multiple conditions to retrieve
                  the name and age of 29 year old Bob.
                </p>
                <p>To do so, we would write the following query:</p>
                <div className="queryContainer">
                  <span>SELECT name, age FROM the_bobs</span>
                  <span>WHERE name = 'Bob' AND age = 29;</span>
                </div>
                <p>The result would show:</p>
                <div className="queryContainer">
                  <div className="tableContainer">
                    <Table
                      tableHeadings={theBobsTableHeadings}
                      tableRows={theBobsTableBRows}
                    />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Where;
