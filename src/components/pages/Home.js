import React from 'react';
import { Link } from 'react-router-dom';
import notebook from '../../assets/icons/notebook.svg';

const Home = () => {
  return (
    <div className="homePageWrapper">
      <section>
        <div className="headingContainer">
          <h1>SQL Notebook</h1>
          <span>
            <img src={notebook} alt="SQL Notebook logo" />
          </span>
        </div>
        <div className="mainContentContainer">
          <Link to="about">
            <span>What's this?</span>
          </Link>
          <Link to="table-of-contents">
            <span>Table of Contents</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
