import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { MyContext } from "../types";
import { User } from "./../entities/User";

import * as argon2 from "argon2";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string,
    @Ctx() { em }: MyContext
  ) : Promise<User> {
    const hashedPassword = await argon2.hash(password);
    const user = await em.create(User, {
      username: username,
      password: hashedPassword,
    });
    await em.persistAndFlush(user);
    return user;
  }
}
