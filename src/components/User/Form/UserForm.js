import React from "react";
import { useMutation } from "@apollo/client";
import "./form.css";
import CREATE_USER from "./index.js";

const UserForm = () => {
  let email, name;
  const [createUser, { data }] = useMutation(CREATE_USER);

  if (data) {
    window.location.href = "/users";
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser({
            variables: { input: { name: name.value, email: email.value } },
          });
          name.value = "";
          email.value = "";
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
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            className="form-input"
            required
            ref={(node) => {
              email = node;
            }}
          />

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

export default UserForm;
