import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { User } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async user(@Args("id") id: string): Promise<User> {
    const user: User = await this.userService.findOneById(id);
    return user;
  }

  @Query()
  async jwt(@Args("email") email: string, @Args("password") password: string) {
    const jwt = await this.userService.getJwt(email, password);
    return jwt;
  }

  @Mutation()
  async register(
    @Args("firstName") firstName: string,
    @Args("lastName") lastName: string,
    @Args("password") password: string,
    @Args("email") email: string
  ) {
    const user: User = await this.userService.register({
      firstName,
      lastName,
      password,
      email,
    });
    return user;
  }
}
