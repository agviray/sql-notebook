import React from 'react';

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
                    <span></span>
                    Oracle
                  </li>
                  <li>
                    <span></span>
                    Microsoft SQL Server
                  </li>
                  <li>
                    <span></span>
                    SQLite
                  </li>
                  <li>
                    <span></span>
                    MySQL
                  </li>
                  <li>
                    <span></span>
                    Postgres
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
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Genre</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>The Dark and the Wicked</td>
                    <td>Horror</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Pulp Fiction</td>
                    <td>Crime, Drama</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Akira</td>
                    <td>Anime, Action, Drama</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>The Conjuring</td>
                    <td>Horror, Mystery, Thriller</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hereditary</td>
                    <td>Horror, Drama, Mystery</td>
                  </tr>
                </table>
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
