import React from 'react';

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
              </article>
              <article>
                <h4>Example 1: Retrieve all data from a table</h4>
                <p>
                  We can retrieve ALL of the data from the movies table using
                  SELECT.
                </p>
                <div className="tableContainer">
                  <h4>Table: movies</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>genre</th>
                        <th>year</th>
                      </tr>
                      <tr>
                        <td>The Conjuring</td>
                        <td>Horror, Mystery, Thriller</td>
                        <td>2013</td>
                      </tr>
                      <tr>
                        <td>The Dark and the Wicked</td>
                        <td>Horror</td>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <td>Pulp Fiction</td>
                        <td>Crime, Drama</td>
                        <td>1994</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Retrieve ALL data from movies by running:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM movies;</span>
                </div>
                <p>The result will be:</p>
                <div className="tableContainer">
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>genre</th>
                        <th>year</th>
                      </tr>
                      <tr>
                        <td>The Conjuring</td>
                        <td>Horror, Mystery, Thriller</td>
                        <td>2013</td>
                      </tr>
                      <tr>
                        <td>The Dark and the Wicked</td>
                        <td>Horror</td>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <td>Pulp Fiction</td>
                        <td>Crime, Drama</td>
                        <td>1994</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>year</th>
                      </tr>
                      <tr>
                        <td>The Conjuring</td>
                        <td>2013</td>
                      </tr>
                      <tr>
                        <td>The Dark and the Wicked</td>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <td>Pulp Fiction</td>
                        <td>1994</td>
                      </tr>
                    </tbody>
                  </table>
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
