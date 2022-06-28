import express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./mockData.js";

export const startServer = async (port: number) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
  });

  await server.start().then(() => {
    const app = express();
    server.applyMiddleware({ app });

    app.listen(port, () =>
      console.log(
        `Server ready at http://localhost:${port}${server.graphqlPath}`
      )
    );
  });
};
