import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  // connect to DataBase
  const orm = await MikroORM.init(microConfig);
  // Run Migrations
  await orm.getMigrator().up();

  // Create an express server
  const app = express();
  // Create Apollo Server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });
  app.listen(4000, () => {
    console.log("Server is Running on localhost:4000");
  });
};

main();
