import React from 'react';

const Update = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Updating Rows with UPDATE</h2>
          </div>
          <div className="update">
            <section>
              <article>
                <h3>UPDATE in Use</h3>
                <p>
                  We update can update data in a row by using the keyword,
                  UPDATE.
                </p>
                <p>Other keywords that we'll use here:</p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        SET - specifies column to update and value to use for
                        update.
                      </span>
                    </li>
                    <li>
                      <span>
                        WHERE - used when we want to filter our results. It
                        allows us to apply a condition to our query.
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <h4>Example 1: Update data in a row</h4>
                <p>
                  Let's say Dennis Lee's birthday just passed. The table shows
                  that Dennis is 22 years old, but this information is no longer
                  correct. We need to update his age to be 23.
                </p>
                <div className="tableContainer">
                  <h4>Table: students</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <th>fName</th>
                        <th>lName</th>
                        <th>age</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Pamela</td>
                        <td>Lee</td>
                        <td>42</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Priscilla</td>
                        <td>Nguyen</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Brandon</td>
                        <td>James</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Danny</td>
                        <td>Vargas</td>
                        <td>37</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dennis</td>
                        <td>Lee</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Andre</td>
                        <td>Williams</td>
                        <td>35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  We update Dennis's age to be 23 by running the following
                  query:
                </p>
                <div className="queryContainer">
                  <span>UPDATE students</span>
                  <span>SET age = 23</span>
                  <span>WHERE name = 'Dennis';</span>
                </div>
                <p>Our result would then be:</p>
                <div className="tableContainer">
                  <table>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <th>fName</th>
                        <th>lName</th>
                        <th>age</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Pamela</td>
                        <td>Lee</td>
                        <td>42</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Priscilla</td>
                        <td>Nguyen</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Brandon</td>
                        <td>James</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Danny</td>
                        <td>Vargas</td>
                        <td>37</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dennis</td>
                        <td>Lee</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Andre</td>
                        <td>Williams</td>
                        <td>35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </section>
            <section>
              <article>
                <h3>Important Note About WHERE</h3>
                <p>
                  Any time we are updating data using WHERE, we must try to be
                  as specific as possible in our WHERE statement.
                </p>
                <p>
                  This is because we can potentially update multiple records if
                  our WHERE logic identifies multiple matches.
                </p>
                <p>Take the following employees table for example:</p>
                <div className="tableContainer">
                  <h4>Table: employees</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <th>fName</th>
                        <th>lName</th>
                        <th>role</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Aubrie</td>
                        <td>Jameson</td>
                        <td>CEO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jeff</td>
                        <td>Gerry</td>
                        <td>service rep</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Angela</td>
                        <td>Frank</td>
                        <td>data entry</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Aubrie</td>
                        <td>Jameson</td>
                        <td>data entry</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Gordon</td>
                        <td>Barr</td>
                        <td>accountant</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Ryan</td>
                        <td>Arthur</td>
                        <td>data entry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Let's say Aubrie Jameson was promoted to a service rep role.
                </p>
                <p>If we were to run this query:</p>
                <div className="queryContainer">
                  <span>UPDATE employees</span>
                  <span>SET role = 'service rep'</span>
                  <span>WHERE fName = 'Aubrie' AND lName = 'Jameson';</span>
                </div>
                <p>Our result would show:</p>
                <div className="tableContainer">
                  <table>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <th>fName</th>
                        <th>lName</th>
                        <th>role</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Aubrie</td>
                        <td>Jameson</td>
                        <td>service rep</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jeff</td>
                        <td>Gerry</td>
                        <td>service rep</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Angela</td>
                        <td>Frank</td>
                        <td>data entry</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Aubrie</td>
                        <td>Jameson</td>
                        <td>service rep</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Gordon</td>
                        <td>Barr</td>
                        <td>accountant</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Ryan</td>
                        <td>Arthur</td>
                        <td>data entry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Comparing the original employees table to the updated version,
                  we can see that Aubrie Jameson - CEO had her role changed to
                  service rep as well.
                </p>
                <p>
                  This is because the WHERE logic will apply to all rows that it
                  matches with.
                </p>
                <p>
                  For this specific example, we could edit our query to be more
                  specific.
                </p>
                <p>A more specific query would be something like:</p>
                <div className="queryContainer">
                  <span>UPDATE employees</span>
                  <span>SET role = 'service rep'</span>
                  <span>
                    WHERE fName = 'Aubrie' AND lName = 'Jameson' AND id = 4;
                  </span>
                </div>
                <p>This would give us our desired result:</p>
                <div className="tableContainer">
                  <table>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <th>fName</th>
                        <th>lName</th>
                        <th>role</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Aubrie</td>
                        <td>Jameson</td>
                        <td>CEO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jeff</td>
                        <td>Gerry</td>
                        <td>service rep</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Angela</td>
                        <td>Frank</td>
                        <td>data entry</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Aubrie</td>
                        <td>Jameson</td>
                        <td>service rep</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Gordon</td>
                        <td>Barr</td>
                        <td>accountant</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Ryan</td>
                        <td>Arthur</td>
                        <td>data entry</td>
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

export default Update;
