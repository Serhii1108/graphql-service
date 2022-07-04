import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { Album } from "src/types/graphql.js";
import { albumsService } from "../services/albums.service.js";

@Resolver("Album")
export class AlbumsResolver {
  constructor(private readonly albumsService: albumsService) {}

  @Query()
  async album(@Args("id") id: string): Promise<Album> {
    const album: Album = await this.albumsService.findById(id);
    return album;
  }

  @ResolveField()
  async id(@Parent() album: { _id: string }) {
    return album._id;
  }
}
