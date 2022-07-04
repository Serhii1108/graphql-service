import { Module } from "@nestjs/common";
import { albumsService } from "./services/albums.service.js";
import { BandsService } from "../bands/services/bands.service.js";
import { AlbumsResolver } from "./resolvers/albums.resolver.js";
import { ArtistsService } from "../artists/services/artists.service.js";
import { GenresService } from "../genres/services/genres.service.js";

@Module({
  providers: [
    albumsService,
    BandsService,
    ArtistsService,
    GenresService,
    AlbumsResolver,
  ],
})
export class AlbumModule {}
