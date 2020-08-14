import { gql } from "@apollo/client";

const CREATE_TASK = gql`
  mutation CreateTask($input: TaskInput!) {
    createTask(input: $input) {
      id
      name
    }
  }
`;

export default CREATE_TASK;
