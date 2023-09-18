import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../Table';

const tableAHeadings = ['Id', 'City', 'State'];
const tableARows = [
  ['1', 'Austin', 'Texas'],
  ['2', 'Manhattan', 'New York'],
  ['3', 'San Antonio', 'Texas'],
  ['4', 'Dallas', 'Texas'],
  ['5', 'Los Angeles', 'California'],
  ['6', 'Houston', 'Texas'],
  ['7', 'Biloxi', 'Mississippi'],
  ['8', 'New Orleans', 'Louisiana'],
  ['9', 'McAllen', 'Texas'],
  ['10', 'Las Vegas', 'Nevada'],
];

const tableBHeadings = ['Id', 'City'];
const tableBRows = [
  ['2', 'Manhattan'],
  ['5', 'Los Angeles'],
  ['7', 'Biloxi'],
  ['8', 'New Orleans'],
  ['10', 'Las Vegas'],
];

const tableCRows = [
  ['7', 'Biloxi', 'Mississippi'],
  ['8', 'New Orleans', 'Louisiana'],
];

const NotOperator = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>The NOT Operator</h2>
          </div>
          <div className="notOperator">
            <section>
              <article>
                <h3>The NOT Operator In Use</h3>
                <p>
                  The NOT operator can be placed before any conditional
                  statement to select records for which that statement is false.
                </p>
              </article>
              <article>
                <h4>Example 1: Filtering with WHERE and NOT</h4>
                <div className="tableContainer">
                  <h4>Table: locations</h4>
                  <Table
                    tableHeadings={tableAHeadings}
                    tableRows={tableARows}
                  />
                </div>
                <p>
                  Using the locations table above, we can use WHERE and NOT to
                  filter the <em>id and city</em> of records that are{' '}
                  <em>not</em> located in Texas.
                </p>
                <p>We can write our query like so:</p>
                <div className="queryContainer">
                  <span>SELECT Id, City FROM locations</span>
                  <span>WHERE NOT state = 'Texas';</span>
                </div>
                <p>
                  In our query, we used the NOT operator before the conditional
                  statement, <em>state = 'Texas'</em>.
                </p>
                <p>
                  When we use NOT this way, the returned results will only
                  include records where this statement is <em>not true</em>.
                </p>
                <p>So, the returned results would be:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={tableBHeadings}
                    tableRows={tableBRows}
                  />
                </div>
              </article>
              <article>
                <h4>Example 2: Filtering with WHERE and NOT IN</h4>
                <p>
                  Using the same locations table from Example 1, we can use
                  WHERE with the NOT operator and the IN operator to filter
                  records that do not fall in a list of specified values.
                </p>
                <p>
                  When we use the IN operator to specify a list of values, the
                  values must be contained in parentheses. For more details
                  about the IN operator, click{' '}
                  <Link to={'/in-operator'}>here</Link>.
                </p>
                <p>
                  Let's say we want to filter all data for locations that are{' '}
                  <em>not</em> located in any of the following states: Texas,
                  New York, California, or Nevada.
                </p>
                <p>We can write our query like so:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM locations</span>
                  <span>
                    WHERE state NOT IN ('Texas, New York, California, Nevada');
                  </span>
                </div>
                <p>And our returned result would show:</p>
                <div className="tableContainer">
                  <Table
                    tableHeadings={tableAHeadings}
                    tableRows={tableCRows}
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

export default NotOperator;
