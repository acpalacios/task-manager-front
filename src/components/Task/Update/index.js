import { gql } from "@apollo/client";

const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $input: TaskInput!) {
    updateTask(id: $id, input: $input) {
      name
      description
    }
  }
`;

export default UPDATE_TASK;
