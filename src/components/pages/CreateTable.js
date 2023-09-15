import React from 'react';
import Table from '../Table';

const tableHeadings = ['name', 'country', 'population', 'area'];
const tableRows = [];

const CreateTable = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Creating a Table with CREATE TABLE</h2>
          </div>
          <div className="createTable">
            <article>
              <h3>CREATE TABLE In Use</h3>
              <p>
                Create a new, empty table by using the keyword, CREATE TABLE.
              </p>
            </article>
            <article>
              <h4>Example</h4>
              <p>Running this query:</p>
              <div className="queryContainer">
                <div className="query">
                  <span>CREATE TABLE cities (</span>
                  <span>name VARCHAR(50),</span>
                  <span>country VARCHAR(50),</span>
                  <span>population INTEGER,</span>
                  <span>area INTEGER,</span>
                  <span>);</span>
                </div>
              </div>
              <p>
                Returns a table called, "cities", and will look something like:
              </p>
              <div className="tableContainer">
                <h4>Table: cities</h4>
                <Table tableHeadings={tableHeadings} tableRows={tableRows} />
              </div>
            </article>
            <section>
              <h3>Dissecting the Query</h3>
              <article>
                <h4>Quick Summary</h4>
                <p>
                  This query tells the database that we want to create a table
                  called, cities, with a name, country, population, and area
                  columns. The terms next to the column names specify the
                  column's data type.
                </p>
              </article>
              <article>
                <h4>What's happening?</h4>
                <p>
                  CREATE TABLE is our keyword, and cities is our identifier.
                  Line 1 of the query tells the database that we want to create
                  a table called, "cities".
                </p>
                <p>Lines 2-4 specify the column names and their data types.</p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        For example, the name column will have a value type of
                        VARCHAR(50) (see below for explanation), and the
                        population column will have a value type of INTEGER (a
                        number)
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <h4>About VARCHAR(n)</h4>
                <p>
                  VARCHAR(n) represents a string value type, with a max length
                  of n.
                </p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        TEXT can also be used instead of VARCHAR(n) to represent
                        a string data type. However, TEXT is better used for
                        storing larger amounts of textual data.
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  In the example query, we created a table that has two
                  columns--name and country--and we specified that their values
                  will be VARCHAR(50).
                </p>
                <p>
                  In other words, we are saying that the values of the name and
                  country columns will be strings, and the strings cannot exceed
                  50 characters.
                </p>
              </article>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateTable;
