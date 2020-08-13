import { gql } from "@apollo/client";

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      description
      status
      user {
        id
        name
      }
    }
  }
`;

export default GET_TASKS;
