import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default {
  type: "postgresql",
  entities: [Post],
  dbName: "reddit_clone",
  user: "postgres",
  password: "admin",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
