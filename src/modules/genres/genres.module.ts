import { Module } from "@nestjs/common";
import { GenresService } from "./services/genres.service.js";
import { GenresResolver } from "./resolvers/genres.resolver.js";

@Module({
  providers: [GenresService, GenresResolver],
})
export class GenresModule {}
