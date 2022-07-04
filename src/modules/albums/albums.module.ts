import { Module } from "@nestjs/common";
import { albumsService } from "./services/albums.service.js";
import { AlbumsResolver } from "./resolvers/albums.resolver.js";

@Module({
  providers: [albumsService, AlbumsResolver],
})
export class AlbumModule {}
