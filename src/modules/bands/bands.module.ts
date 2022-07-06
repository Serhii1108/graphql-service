import { Module } from "@nestjs/common";
import { BandsService } from "./services/bands.service.js";
import { GenresService } from "../genres/services/genres.service.js";
import { ArtistsService } from "../artists/services/artists.service.js";
import { BandsResolver } from "./resolvers/bands.resolver.js";

@Module({
  providers: [BandsService, GenresService, ArtistsService, BandsResolver],
})
export class BandsModule {}
