import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import GET_USERS from "../../User/List/index.js";
import "./list.css";

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <div className="btn-container">
        <Link to="/user/create" className="btn">
          Create User
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <h3>Name</h3>
          </div>
          <div className="column">
            <h3>Email</h3>
          </div>
          <div className="column">
            <h3>Actions</h3>
          </div>
        </div>
        {data.users.map((user) => (
          <div className="row" key={user.id}>
            <div className="column">
              <h3>{user.name}</h3>
            </div>
            <div className="column">
              <h3>{user.email}</h3>
            </div>
            <div className="column">
              <Link to={`user/${user.id}`} className="btn">
                Show Tasks
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
