import { Module } from "@nestjs/common";
import { albumsService } from "./services/albums.service.js";
import { BandsService } from "../bands/services/bands.service.js";
import { AlbumsResolver } from "./resolvers/albums.resolver.js";
import { ArtistsService } from "../artists/services/artists.service.js";
import { GenresService } from "../genres/services/genres.service.js";
import { TracksService } from "../tracks/services/tracks.service.js";

@Module({
  providers: [
    albumsService,
    BandsService,
    ArtistsService,
    GenresService,
    TracksService,
    AlbumsResolver,
  ],
})
export class AlbumModule {}
