import { gql } from "@apollo/client";

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      email
      tasks {
          id
          name
          description
          status
      }
    }
  }
`;

export default GET_USER;
