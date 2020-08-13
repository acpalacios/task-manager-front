import React from "react";
import { useQuery } from "@apollo/client";
import GET_USERS from "../../User/List/index.js";

function Tasks() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.users.map((user) => (
        <div className="row" key={user.id}>
          <div>
            <h1>{user.name}</h1>
          </div>
          <div>
            <h1>{user.email}</h1>
          </div>
          <div>
            <button>Show Tasks</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
