import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Album, AlbumInput, Genre } from "src/types/graphql.js";
import { albumsService } from "../services/albums.service.js";
import { BandsService } from "../../bands/services/bands.service.js";
import { ArtistsService } from "../../artists/services/artists.service.js";
import { GenresService } from "../../genres/services/genres.service.js";

@Resolver("Album")
export class AlbumsResolver {
  constructor(
    private readonly albumsService: albumsService,
    private readonly bandsService: BandsService,
    private readonly artistsService: ArtistsService,
    private readonly genresService: GenresService
  ) {}

  @Query()
  async album(@Args("id") id: string): Promise<Album> {
    const album: Album = await this.albumsService.findById(id);
    return album;
  }

  @Query()
  async albums(
    @Args("limit") limit: number,
    @Args("offset") offset: number
  ): Promise<[Album]> {
    const album = await this.albumsService.getAll(limit, offset);
    return album;
  }

  @Mutation()
  async createAlbum(
    @Args("createAlbumInput") createAlbumInput: AlbumInput
  ): Promise<Album> {
    const album: Album = await this.albumsService.create(createAlbumInput);
    return album;
  }

  @Mutation()
  async updateAlbum(
    @Args("id") id: string,
    @Args("updateAlbumInput") updateAlbumInput: AlbumInput
  ): Promise<Album> {
    const album: Album = await this.albumsService.update(id, updateAlbumInput);
    return album;
  }

  @ResolveField()
  async id(@Parent() album: { _id: string }) {
    return album._id;
  }

  @ResolveField()
  async bands(@Parent() album: { bandsIds: string[] }) {
    const ids: string[] = album.bandsIds;
    const genres: Genre[] = await this.bandsService.findByIds(ids);
    return genres;
  }

  @ResolveField()
  async artists(@Parent() album: { artistsIds: string[] }) {
    const ids: string[] = album.artistsIds;
    const artists: Album[] = await this.artistsService.findByIds(ids);
    return artists;
  }

  @ResolveField()
  async genres(@Parent() album: { genresIds: string[] }) {
    const ids: string[] = album.genresIds;
    const genres: Genre[] = await this.genresService.findByIds(ids);
    return genres;
  }
}
