import React from 'react';
import { Link } from 'react-router-dom';

const QueriesWithExpressions = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Queries with Expressions (and the AS keyword)</h2>
          </div>
          <div className="queriesWithExpressions">
            <article>
              <h3>Using Expressions in Queries</h3>
              <p>
                With SQL, we can do more than just pull raw data out of tables.
              </p>
              <p>
                We can write SQL to transform or process data even before we
                receive it, by including an expression in our query.
              </p>
              <p>Other keywords that we will be using here:</p>
              <div className="listContainer">
                <ul>
                  <li>
                    <Link to="../select">
                      <span>SELECT (see more)</span>
                    </Link>
                  </li>
                  <li>
                    <span>AS - renames a column or table with an alias.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <h4>
                Example 1: Using math expressions in a query (without using AS)
              </h4>
              <p>
                Given the 'fake cities' table shown below, let's say we want to
                calculate the population density of each city.
              </p>
              <p>The formula for calculating the population density is:</p>
              <div className="listContainer">
                <ul>
                  <li>
                    <span>population / area (population divided by area)</span>
                  </li>
                </ul>
              </div>
              <div className="tableContainer">
                <h4>Table: fake cities</h4>
                <table>
                  <tbody>
                    <tr>
                      <th>name</th>
                      <th>country</th>
                      <th>population</th>
                      <th>area</th>
                    </tr>
                    <tr>
                      <td>Mars City</td>
                      <td>Marsia</td>
                      <td>38505000</td>
                      <td>8223</td>
                    </tr>
                    <tr>
                      <td>Jupiter City</td>
                      <td>Jupiteer</td>
                      <td>28125000</td>
                      <td>2240</td>
                    </tr>
                    <tr>
                      <td>Saturn City</td>
                      <td>Satoorn</td>
                      <td>20935000</td>
                      <td>3043</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                If we wanted to retrieve our data to display just the city names
                and calculated population density, we would use an expression in
                our query.
              </p>
              <p>Our query might look like:</p>
              <div className="queryContainer">
                <span>SELECT name, population / area FROM cities;</span>
              </div>
              <p>And our result would show something like:</p>
              <div className="tableContainer">
                <table>
                  <tbody>
                    <tr>
                      <th>name</th>
                      <th>?column?</th>
                    </tr>
                    <tr>
                      <td>Mars City</td>
                      <td>4682</td>
                    </tr>
                    <tr>
                      <td>Jupiter City</td>
                      <td>12555</td>
                    </tr>
                    <tr>
                      <td>Saturn City</td>
                      <td>6879</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The population density values are correct, however, we see that
                the column does not have a proper name.
              </p>
              <p>This is where the keyword, AS, comes into play.</p>
            </article>
            <article>
              <h4>
                Example 2: Using math expressions in a query (using AS to give a
                COLUMN alias)
              </h4>
              <div className="emphasizedBlock">
                <p>
                  A few things to be aware of before continuing with this
                  example:
                </p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        Remember, the AS keyword can rename either a column OR
                        table with an alias.
                      </span>
                    </li>
                    <li>
                      <span>
                        That said, the following example is only showing the use
                        of AS to assign an alias to a COLUMN.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                When we use expressions in the SELECT part of the query, we
                should also use the AS keyword so that results of the expression
                are displayed under a descriptive column name.
              </p>
              <p>
                So we can edit our query from Example 1 to look something like
                this instead:
              </p>
              <div className="queryContainer">
                <span>
                  SELECT name, population / area AS population_density
                </span>
                <span>FROM cities;</span>
              </div>
              <p>And our result would show:</p>
              <div className="tableContainer">
                <table>
                  <tbody>
                    <tr>
                      <th>name</th>
                      <th>population_density</th>
                    </tr>
                    <tr>
                      <td>Mars City</td>
                      <td>4682</td>
                    </tr>
                    <tr>
                      <td>Jupiter City</td>
                      <td>12555</td>
                    </tr>
                    <tr>
                      <td>Saturn City</td>
                      <td>6879</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueriesWithExpressions;
