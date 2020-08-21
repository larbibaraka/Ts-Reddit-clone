import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

export default {
  type: "postgresql",
  entities: [Post],
  dbName: "reddit_clone",
  user: "postgres",
  password: "admin",
  debug: !__prod__,
} as const;
