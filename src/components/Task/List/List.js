import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import GET_TASKS from "./index.js";
import DELETE_TASK from "./delete.js";
import "./list.css";

const Tasks = () => {
  const [deleteTask, { data: taskData }] = useMutation(DELETE_TASK);

  if (taskData) {
    window.location.href = "/tasks";
  }

  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div className="btn-container">
        <Link to="/task/create" className="btn">
          Create Task
        </Link>
      </div>
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
              <button
                className="btn"
                onClick={() => {
                  deleteTask({
                    variables: {
                      id: task.id,
                    },
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
