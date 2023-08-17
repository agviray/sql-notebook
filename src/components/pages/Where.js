import React from 'react';

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
                      <tr>
                        <td>Con Air</td>
                        <td>Action, Crime, Thriller</td>
                        <td>1997</td>
                      </tr>
                      <tr>
                        <td>Let the Right One In</td>
                        <td>Drama, Fantasy, Horror</td>
                        <td>2008</td>
                      </tr>
                      <tr>
                        <td>The Witch</td>
                        <td>Drama, Fantasy, Horror</td>
                        <td>2015</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <table>
                    <tbody>
                      <tr>
                        <th>title</th>
                        <th>genre</th>
                        <th>year</th>
                      </tr>
                      <tr>
                        <td>Akira</td>
                        <td>Anime, Action, Drama</td>
                        <td>1988</td>
                      </tr>
                      <tr>
                        <td>Pulp Fiction</td>
                        <td>Crime, Drama</td>
                        <td>1994</td>
                      </tr>
                      <tr>
                        <td>Con Air</td>
                        <td>Action, Crime, Thriller</td>
                        <td>1997</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
              <article>
                <h4>
                  Example 2: Filtering records with WHERE Using More Than One
                  Condition
                </h4>
                <div className="tableContainer">
                  <h4>Table: the_bobs</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Bob</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Bob</td>
                        <td>38</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Bob</td>
                        <td>32</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Bob</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>Bob</td>
                        <td>29</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Bob</td>
                        <td>41</td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>Bob</td>
                        <td>19</td>
                      </tr>
                    </tbody>
                  </table>
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
                    <table>
                      <tbody>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Age</th>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td>Bob</td>
                          <td>29</td>
                        </tr>
                      </tbody>
                    </table>
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
