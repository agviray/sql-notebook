import React from 'react';

const InsertInto = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Inerting Data with INSERT INTO</h2>
          </div>
          <div className="insertInto">
            <section>
              <article>
                <h3>INSERT INTO In Use</h3>
                <p>
                  Insert data into a table by using the keyword, INSERT INTO.
                </p>
              </article>
              <article>
                <h4>Example 1: Insert single row of data</h4>
                <p>Let's say we have the following empty 'movies' table:</p>
                <div className="tableContainer">
                  <h4>Table: movies</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>genre</th>
                        <th>year</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Running this query:</p>
                <div className="queryContainer">
                  <span>INSERT INTO movies (title, genre, year)</span>
                  <span>
                    VALUES ('The Conjuring', 'Horror, Mystery, Thriller', 2013);
                  </span>
                </div>
                <p>Will return this result:</p>
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
                    </tbody>
                  </table>
                </div>
              </article>
              <article>
                <h4>Example 2: Insert multiple rows of data</h4>
                <p>
                  We can insert multiple rows of data into a table by running:
                </p>
                <div className="queryContainer">
                  <span>INSERT INTO movies (title, genre, year)</span>
                  <div className="multiLine">
                    <span>VALUES</span>
                    <span>
                      ('The Conjuring', 'Horror, Mystery, Thriller', 2013)
                    </span>
                    <span>('The Dark and the Wicked', 'Horror', 2020)</span>
                    <span>('Pulp Fiction', 'Crime, Drama', 1994);</span>
                  </div>
                </div>
                <p>Result:</p>
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
              </article>
            </section>
            <section>
              <h3>Dissecting the Query</h3>
              <article>
                <h4>Quick Summary</h4>
                <p>
                  Our query tells the database that we want to insert a new row
                  of data into the movies table for the title, genre, and year
                  columns, where the columns' values will be 'The Conjuring',
                  'Horror', and 2020, respectively.
                </p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        Note that the order of column names do not have to be in
                        the same order that they appear in the table.
                      </span>
                    </li>
                    <li>
                      <span>
                        The column names can be specified in any order as long
                        as their associated values match the same position.
                      </span>
                    </li>
                    <li>
                      <span>
                        For example, if we were to run the query like so:
                      </span>
                      <div className="queryContainer">
                        <div className="queryContainer">
                          <span>INSERT INTO movies (year, title, genre)</span>
                          <span>
                            VALUES (2013, 'The Conjuring', 'Horror, Mystery,
                            Thriller');
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span>We would still get the same result:</span>
                    </li>
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
                        </tbody>
                      </table>
                    </div>
                  </ul>
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsertInto;
