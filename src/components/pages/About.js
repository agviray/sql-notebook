import React from 'react';

const About = () => {
  return (
    <div className="wrapper">
      <section>
        <div>
          <div className="headingContainer">
            <h2>About</h2>
          </div>
          <div className="mainContentContainer">
            <p>
              Welcome to SQL Notebook! I built this site to serve as a go-to
              resource for SQL-related notes, reminders, and *eventually* more.
            </p>
            <p>
              It houses a number of only static, informational pages at the
              moment, but I'm aiming to add additional features which might
              include:
            </p>
            <ul className="contentList">
              <li>
                <span>
                  A simple in-browser code editor and access to a hosted sample
                  database, in order to send queries and display their results
                  on a page.
                </span>
              </li>
              <li>
                <span>
                  Randomized practice problems to allow the user to experiment
                  with a query and test their understanding.
                </span>
              </li>
            </ul>
            <p>
              In the meantime, feel free to browse the current material. Enjoy!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
