import { gql } from "@apollo/client";

export const GET_TASKS = gql `
  query getAllTasks {
  getAllTasks {
    id
    title
    description
  }
}
`;