import { Module } from "@nestjs/common";

import { TracksResolver } from "./resolvers/tracks.resolver.js";

import { albumsService } from "../albums/services/albums.service.js";
import { GenresService } from "../genres/services/genres.service.js";
import { TracksService } from "./services/tracks.service.js";
import { BandsService } from "../bands/services/bands.service.js";
import { ArtistsService } from "../artists/services/artists.service.js";

@Module({
  providers: [
    TracksService,
    albumsService,
    GenresService,
    BandsService,
    ArtistsService,
    TracksResolver,
  ],
})
export class TracksModule {}
