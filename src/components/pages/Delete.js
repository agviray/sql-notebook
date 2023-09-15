import React from 'react';
import Table from '../Table';

const tableHeadings = ['id', 'fName', 'lName', 'age'];
const tableRows = [
  ['1', 'Pamela', 'Lee', '42'],
  ['2', 'Priscilla', 'Nguyen', '26'],
  ['3', 'Brandon', 'James', '20'],
  ['4', 'Danny', 'Vargas', '37'],
  ['5', 'Dennis', 'Lee', '22'],
  ['6', 'Andre', 'Williams', '35'],
];

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
                  <Table tableHeadings={tableHeadings} tableRows={tableRows} />
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
