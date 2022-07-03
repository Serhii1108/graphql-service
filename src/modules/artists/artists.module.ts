import { Module } from "@nestjs/common";
import { ArtistsService } from "./services/artists.service.js";
import { ArtistsResolver } from "./resolvers/artists.resolver.js";
import { BandsService } from "../bands/services/bands.service.js";

@Module({
  providers: [ArtistsService, BandsService, ArtistsResolver],
})
export class ArtistsModule {}
