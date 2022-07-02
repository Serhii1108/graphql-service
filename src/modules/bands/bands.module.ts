import { Module } from "@nestjs/common";
import { BandsService } from "./services/bands.service.js";
import { BandsResolver } from "./resolvers/bands.resolver.js";

@Module({
  providers: [BandsService, BandsResolver],
})
export class BandsModule {}
