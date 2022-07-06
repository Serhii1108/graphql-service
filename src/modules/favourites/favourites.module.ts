import { Module } from "@nestjs/common";

import { FavouritesService } from "./services/favourites.service.js";
import { FavouritesResolver } from "./resolvers/favourites.resolver.js";
import { albumsService } from "../albums/services/albums.service.js";
import { ArtistsService } from "../artists/services/artists.service.js";
import { BandsService } from "../bands/services/bands.service.js";
import { GenresService } from "../genres/services/genres.service.js";
import { TracksService } from "../tracks/services/tracks.service.js";

@Module({
  providers: [
    FavouritesService,
    albumsService,
    BandsService,
    ArtistsService,
    GenresService,
    TracksService,
    FavouritesResolver,
  ],
})
export class FavouritesModule {}
