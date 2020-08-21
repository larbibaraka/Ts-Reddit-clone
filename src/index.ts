import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";

const main = async () => {
  // connect to DataBase
  const orm = await MikroORM.init(microConfig);
  // Run Migrations
  await orm.getMigrator().up();
};

main();
