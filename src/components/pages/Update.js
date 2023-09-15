import React from 'react';
import Table from '../Table';

// - Data for students table.
const studentsTableHeadings = ['Id', 'fName', 'lName', 'age'];
const studentsTableARows = [
  ['1', 'Pamela', 'Lee', '42'],
  ['2', 'Priscilla', 'Nguyen', '26'],
  ['3', 'Brandon', 'James', '20'],
  ['4', 'Danny', 'Vargas', '37'],
  ['5', 'Dennis', 'Lee', '22'],
  ['6', 'Andre', 'Williams', '35'],
];
const studentsTableBRows = [
  ['1', 'Pamela', 'Lee', '42'],
  ['2', 'Priscilla', 'Nguyen', '26'],
  ['3', 'Brandon', 'James', '20'],
  ['4', 'Danny', 'Vargas', '37'],
  ['5', 'Dennis', 'Lee', '23'],
  ['6', 'Andre', 'Williams', '35'],
];

// - Data for employees table.
const employeesTableHeadings = ['id', 'fName', 'lName', 'role'];
const employeesTableARows = [
  ['1', 'Aubrie', 'Jameson', 'CEO'],
  ['2', 'Jeff', 'Gerry', 'service rep'],
  ['3', 'Angela', 'Frank', 'data entry'],
  ['4', 'Aubrie', 'Jameson', 'data entry'],
  ['5', 'Gordon', 'Barr', 'accountant'],
  ['6', 'Ryan', 'Arthur', 'data entry'],
];
const employeesTableBRows = [
  ['1', 'Aubrie', 'Jameson', 'service rep'],
  ['2', 'Jeff', 'Gerry', 'service rep'],
  ['3', 'Angela', 'Frank', 'data entry'],
  ['4', 'Aubrie', 'Jameson', 'service rep'],
  ['5', 'Gordon', 'Barr', 'accountant'],
  ['6', 'Ryan', 'Arthur', 'data entry'],
];
const employeesTableCRows = [
  ['1', 'Aubrie', 'Jameson', 'CEO'],
  ['2', 'Jeff', 'Gerry', 'service rep'],
  ['3', 'Angela', 'Frank', 'data entry'],
  ['4', 'Aubrie', 'Jameson', 'service rep'],
  ['5', 'Gordon', 'Barr', 'accountant'],
  ['6', 'Ryan', 'Arthur', 'data entry'],
];

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
                  <Table
                    tableHeadings={studentsTableHeadings}
                    tableRows={studentsTableARows}
                  />
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
                  <Table
                    tableHeadings={studentsTableHeadings}
                    tableRows={studentsTableBRows}
                  />
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
                  <Table
                    tableHeadings={employeesTableHeadings}
                    tableRows={employeesTableARows}
                  />
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
                  <Table
                    tableHeadings={employeesTableHeadings}
                    tableRows={employeesTableBRows}
                  />
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
                  <Table
                    tableHeadings={employeesTableHeadings}
                    tableRows={employeesTableCRows}
                  />
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
