import React from "react";
import { useQuery } from "@apollo/client";
import GET_USER from "../../User/UserPage/index.js";
import "../List/list.css";

const UserPage = ({ match }) => {
  const {
    params: { userId },
  } = match;
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h3>Name</h3>
        </div>
        <div className="column">
          <h3>Description</h3>
        </div>
        <div className="column">
          <h3>Status</h3>
        </div>
      </div>
      {data.user.tasks.map((task) => (
        <div className="row" key={task.id}>
          <div className="column">
            <h3>{task.name}</h3>
          </div>
          <div className="column">
            <h3>{task.description}</h3>
          </div>
          <div className="column">
            <h3>{task.status}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
