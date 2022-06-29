import { Module } from "@nestjs/common";
import { UserResolver } from "./resolvers/user.resolver.js";
import { UserService } from "./services/user.service.js";

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
