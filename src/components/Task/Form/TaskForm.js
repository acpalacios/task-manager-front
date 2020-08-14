import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import CREATE_TASK from "./index.js";
import GET_USERS from "../../User/List/index.js";

const TaskForm = () => {
  let name, description, userId, status;
  const [createTask, { data }] = useMutation(CREATE_TASK);

  const { loading, error, data: userData } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (data) {
    window.location.href = "/tasks";
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTask({
            variables: {
              input: {
                name: name.value,
                description: description.value,
                user_id: userId.value,
                status: status.value,
              },
            },
          });
        }}
      >
        <div className="form-container">
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            className="form-input"
            required
            ref={(node) => {
              name = node;
            }}
          />

          <label htmlFor="email">
            <b>Description</b>
          </label>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            id="description"
            className="form-input"
            required
            ref={(node) => {
              description = node;
            }}
          />

          <label htmlFor="user">
            <b>Assigned</b>
          </label>
          <select
            className="form-input"
            id="user"
            ref={(node) => {
              userId = node;
            }}
          >
            {userData.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          <label htmlFor="status">
            <b>Description</b>
          </label>
          <select
            className="form-input"
            id="status"
            ref={(node) => {
              status = node;
            }}
          >
            <option value="CREATED">Created</option>
            <option value="STARTED">Started</option>
            <option value="INPROGRESS">In-progress</option>
            <option value="COMPLETED">Completed</option>
          </select>

          <div className="btn-container">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
