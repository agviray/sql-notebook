import React from 'react';
import Table from '../Table';

const tableHeadings = ['Id', 'Title', 'Genre'];
const tableRows = [
  ['1', 'The Dark and the Wicked', 'Horror'],
  ['2', 'Pulp Fiction', 'Crime, Drama'],
  ['3', 'Akira', 'Anime, Action, Drama'],
  ['4', 'The Conjuring', 'Horror, Mystery, Thriller'],
  ['5', 'Hereditary', 'Horror, Drama, Mystery'],
];

const GenSqlInfo = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>General SQL Info</h2>
          </div>
          <div className="generalSqlInfo">
            <article>
              <h3>What is SQL?</h3>
              <p>
                SQL is the acronym for{' '}
                <span className="emphasizedText">
                  Structured Query Language
                </span>
                . It is a language used to query, transform, and manipulate data
                from a relational database.
              </p>
              <article>
                <h4>Popular SQL Databases</h4>
                <ul>
                  <li>
                    <span>Oracle</span>
                  </li>
                  <li>
                    <span>Microsoft SQL Server</span>
                  </li>
                  <li>
                    <span>SQLite</span>
                  </li>
                  <li>
                    <span>MySQL</span>
                  </li>
                  <li>
                    <span>Postgres</span>
                  </li>
                </ul>
              </article>
            </article>
            <article>
              <h3>What is a relational database?</h3>
              <p>
                A <span className="emphasizedText">relational database</span> is
                a representation of a collection of related{' '}
                <span className="emphasizedText">tables</span>. The tables are
                two-dimensional--similar to an Excel spreadsheet--with a fixed
                number of named columns (also known as the tables'{' '}
                <span className="emphasizedText">attributes</span> or{' '}
                <span className="emphasizedText">properties</span>) and any
                number of rows.
              </p>
              <p>
                For example, let's say that a database exists for Digital
                Entertainment. In such an example, the "Movies" table below
                could be table that exists in the Digital Entertainment
                database. The column headings: Id, Title, and Genre, would be
                the table's attributes/properties.
              </p>
              <div className="tableContainer">
                <h4>Table: Movies</h4>
                <Table tableHeadings={tableHeadings} tableRows={tableRows} />
              </div>
              <p>
                The Digital Entertainment database might also contain additional
                tables, such a table called, "Social Media" or "Video Games", as
                these are also types of digital entertainment.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenSqlInfo;
