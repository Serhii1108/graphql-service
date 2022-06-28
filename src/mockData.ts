import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export const resolvers = {
  Query: {
    books: () => books,
  },
};

export const books: string[] = [];
