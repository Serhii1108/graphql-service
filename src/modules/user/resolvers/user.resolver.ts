import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { UserService } from "../services/user.service.js";
import { RegisterInput, User } from "src/types/graphql.js";

@Resolver("User")
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
  async register(@Args("registerInput") registerInput: RegisterInput) {
    const user: User = await this.userService.register(registerInput);
    return user;
  }

  @ResolveField()
  async id(@Parent() user: { _id: string }) {
    return user._id;
  }
}
