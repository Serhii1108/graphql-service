import { Args, Query, Resolver } from "@nestjs/graphql";
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
}
