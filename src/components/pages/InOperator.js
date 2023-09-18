import React from 'react';
import Table from '../Table';

const headings = ['id', 'name', 'type'];
const tableARows = [
  ['11', 'apple', 'fruit'],
  ['12', 'strawberry', 'fruit'],
  ['13', 'broccoli', 'vegetable'],
  ['15', 'crab', 'seafood'],
  ['18', 'orange', 'fruit'],
  ['25', 'carrot', 'vegetable'],
  ['27', 'mango', 'fruit'],
  ['28', 'salmon', 'seafood'],
  ['29', 'lobster', 'seafood'],
  ['30', 'goat', 'red meat'],
  ['31', 'spinach', 'vegetable'],
  ['32', 'banana', 'fruit'],
];
const tableBRows = [
  ['13', 'broccoli', 'vegetable'],
  ['15', 'crab', 'seafood'],
  ['25', 'carrot', 'vegetable'],
  ['28', 'salmon', 'seafood'],
  ['29', 'lobster', 'seafood'],
  ['31', 'spinach', 'vegetable'],
];

const InOperator = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>The IN Operator</h2>
          </div>
          <div className="inOperator">
            <section>
              <article>
                <h3>The IN Operator In Use</h3>
                <p>
                  The IN operator is used to specify multiple values (i.e. a
                  list of values) in a WHERE clause.
                </p>
                <p>
                  The specified list of values must be contained within
                  parentheses.
                </p>
              </article>
              <article>
                <h4>Example 1: Filtering with WHERE and IN</h4>
                <div className="tableContainer">
                  <h4>Table: Food</h4>
                  <Table tableHeadings={headings} tableRows={tableARows} />
                </div>
                <p>
                  Using the Food table above, we can use WHERE and IN to filter
                  foods that are either vegetables or seafoods.
                </p>
                <p>We can write our query like so:</p>
                <div className="queryContainer">
                  <span>SELECT * FROM Food</span>
                  <span>WHERE type IN ( 'vegetable', 'seafood');</span>
                </div>
                <p>And the returned result would show:</p>
                <div className="tableContainer">
                  <Table tableHeadings={headings} tableRows={tableBRows} />
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InOperator;
