import React from "react";
import { useQuery } from "@apollo/client";
import GET_USERS from "../../User/List/index.js";
import "./list.css";

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="container">
      {data.users.map((user) => (
        <div className="row" key={user.id}>
          <div className="column">
            <h3>{user.name}</h3>
          </div>
          <div className="column">
            <h3>{user.email}</h3>
          </div>
          <div className="column">
            <button className="btn">Show Tasks</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
