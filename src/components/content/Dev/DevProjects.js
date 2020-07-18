import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

const DevProjects = () => {
  const data = useContext(DataContext);
  if (data) {
    const {
      userBio: {
        followers = 0,
        following = 0,
        public_gists = 0,
        public_repos = 0,
      } = {},
    } = data;
    return (
      <div className="row">
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public repos: {public_repos}</p>
        <p>Public gists: {public_gists}</p>
      </div>
    );
  }
  return null;
};

export default DevProjects;
