import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import UPDATE_TASK from "./index.js";
import GET_USERS from "../../User/List/index.js";
import GET_TASK from "./task.js";

const UpdateForm = ({ match }) => {
  let name, description, userId, status;

  const {
    params: { taskId },
  } = match;

  const [updateTask, { data: newTask }] = useMutation(UPDATE_TASK);

  const { loading: userLoading, error: userError, data: taskData } = useQuery(
    GET_TASK,
    {
      variables: {
        id: taskId,
      },
    }
  );

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading && userLoading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (userError) return `Error! ${userError.message}`;

  if (newTask) {
    window.location.href = "/tasks";
  }

  return (
    <div>
      {taskData && data ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTask({
              variables: {
                id: taskId,
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
              defaultValue={taskData.task.name}
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
              defaultValue={taskData.task.description}
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
              defaultValue={taskData.task.user_id}
            >
              {data.users.map((user) => (
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
              defaultValue={taskData.task.status}
            >
              <option value="CREATED">Created</option>
              <option value="STARTED">Started</option>
              <option value="INPROGRESS">In-progress</option>
              <option value="COMPLETED">Completed</option>
            </select>

            <div className="btn-container">
              <button type="submit" className="btn">
                Update
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UpdateForm;
