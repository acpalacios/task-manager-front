import React from "react";
import { useQuery } from "@apollo/client";
import GET_TASKS from "./index.js";
import { Link } from "react-router-dom";
import "./list.css"

function Users() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="container">
      <div className="row">
        <div className="task-column">
          <h3>Name</h3>
        </div>
        <div className="task-column">
          <h3>Description</h3>
        </div>
        <div className="task-column">
          <h3>Assigned</h3>
        </div>
        <div className="task-column">
          <h3>Status</h3>
        </div>
        <div className="task-column">
          <h3>Actions</h3>
        </div>
      </div>
      {data.tasks.map((task) => (
        <div className="row" key={task.id}>
          <div className="task-column">
            <h3>{task.name}</h3>
          </div>
          <div className="task-column">
            <h3>{task.description}</h3>
          </div>
          <div className="task-column">
            <h3>{task.user.name}</h3>
          </div>
          <div className="task-column">
            <h3>{task.status}</h3>
          </div>
          <div className="task-column">
            <Link to={`task/${task.id}`} className="btn">
              Update
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
