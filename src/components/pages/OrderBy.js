import React from 'react';

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
                        <td>Akira</td>
                        <td>Anime, Action, Drama</td>
                        <td>1988</td>
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
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>year</th>
                      </tr>
                      <tr>
                        <td>Akira</td>
                        <td>1988</td>
                      </tr>
                      <tr>
                        <td>Pulp Fiction</td>
                        <td>1994</td>
                      </tr>
                      <tr>
                        <td>The Conjuring</td>
                        <td>2013</td>
                      </tr>
                      <tr>
                        <td>The Dark and the Wicked</td>
                        <td>2020</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>year</th>
                      </tr>
                      <tr>
                        <td>Akira</td>
                        <td>1988</td>
                      </tr>
                      <tr>
                        <td>Pulp Fiction</td>
                        <td>1994</td>
                      </tr>
                      <tr>
                        <td>The Conjuring</td>
                        <td>2013</td>
                      </tr>
                      <tr>
                        <td>The Dark and the Wicked</td>
                        <td>2020</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <table>
                    <tbody>
                      <tr>
                        <th>Id</th>
                        <th>Country</th>
                        <th>City</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Japan</td>
                        <td>Tokyo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Canada</td>
                        <td>Toronto</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>United States</td>
                        <td>Houston</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philippines</td>
                        <td>Manila</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <table>
                    <tbody>
                      <tr>
                        <th>Id</th>
                        <th>Country</th>
                        <th>City</th>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Canada</td>
                        <td>Toronto</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Japan</td>
                        <td>Tokyo</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philippines</td>
                        <td>Manila</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>United States</td>
                        <td>Houston</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Running this query:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM places</span>
                  <span>ORDER BY id DESC;</span>
                </div>
                <p>would give us this result:</p>
                <div className="tableContainer">
                  <table>
                    <tbody>
                      <tr>
                        <th>Id</th>
                        <th>Country</th>
                        <th>City</th>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philippines</td>
                        <td>Manila</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>United States</td>
                        <td>Houston</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Canada</td>
                        <td>Toronto</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Japan</td>
                        <td>Tokyo</td>
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

export default OrderBy;
