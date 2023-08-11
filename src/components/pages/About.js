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
              Welcome to SQL Notebook! I built this project to serve as a go-to
              resource for SQL-related notes, reminders, and more.
            </p>
            <p>
              It currently houses a number of static pages only, but I'm aiming
              to add additional features which might include:
            </p>
            <ul className="contentList">
              <li>
                <span>
                  Access to a hosted sample database in order to send queries
                  and display their results on a page.
                </span>
              </li>
              <li>
                <span>
                  Randomized practice problems to allow the user to experiment
                  with a query.
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
