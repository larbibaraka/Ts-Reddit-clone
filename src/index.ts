import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  await MikroORM.init({
    type: "postgresql",
    entities: [Post],
    dbName: "reddit_clone",
    user: "postgres",
    password: "admin",
    debug: !__prod__,
  });
};

main();
