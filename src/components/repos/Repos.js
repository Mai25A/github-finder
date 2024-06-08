// Repos.js
import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./ReposItem";

const Repos = ({ repos }) => {
  return (
    <div className="card">
      <h2>Repositories</h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
