import React from 'react';

const Delete = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>Delete rows using DELETE</h2>
          </div>
          <div className="delete">
            <section>
              <article>
                <h3>DELETE In Use</h3>
                <p>We can delete rows from tables using the keyword, DELETE.</p>
                <p>
                  Note that we are using other keywords in our examples below,
                  such as: FROM, WHERE, AND, and OR.
                </p>
                <div className="listContainer">
                  <ul>
                    <li>
                      <span>
                        The FROM keyword specifies what table we are deleting
                        data from.
                      </span>
                    </li>
                    <li>
                      <span>
                        The WHERE keyword is used when we want to filter our
                        results. It allows us to apply a condition to our query.
                      </span>
                    </li>
                    <li>
                      <span>
                        AND only includes results where both one condition AND
                        another condition are true.
                      </span>
                    </li>
                    <li>
                      <span>
                        OR includes results where either one condition is true,
                        OR some other condition is true.
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <h4>Example 1: Delete a row from a table</h4>
                <p>
                  Let's say Brandon James no longer attends the school, so we
                  want to delete his record from the table.
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
                  There are different ways to do this, and each of them will
                  give the same result.
                </p>
                <p>We can delete Brandon James running any of these queries:</p>
                <div className="queryContainer">
                  <span>DELETE FROM students</span>
                  <span>WHERE fName = 'Brandon';</span>
                </div>
                <p>- OR -</p>
                <div className="queryContainer">
                  <span>DELETE FROM students</span>
                  <span>WHERE id = 3;</span>
                </div>
                <p>- OR -</p>
                <div className="queryContainer">
                  <span>DELETE FROM students</span>
                  <span>WHERE fName = 'Brandon' AND lName = 'James';</span>
                </div>
                <p>- OR -</p>
                <div className="queryContainer">
                  <span>DELETE FROM students</span>
                  <span>WHERE fName = 'Brandon' OR id = 3;</span>
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delete;
