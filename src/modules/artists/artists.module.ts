import { Module } from "@nestjs/common";
import { ArtistsService } from "./services/artists.service.js";
import { ArtistsResolver } from "./resolvers/artists.resolver.js";

@Module({
  providers: [ArtistsService, ArtistsResolver],
})
export class ArtistsModule {}
