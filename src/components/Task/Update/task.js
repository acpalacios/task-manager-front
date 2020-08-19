import { gql } from "@apollo/client";

const GET_TASK = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
        name
        description
        user_id
        status
    }
  }
`;

export default GET_TASK;
