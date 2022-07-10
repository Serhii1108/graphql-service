import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Artist, Band, Favourites, Genre, Track } from "src/types/graphql.js";

import { FavouritesService } from "../services/favourites.service.js";
import { ArtistsService } from "../../artists/services/artists.service.js";
import { BandsService } from "../../bands/services/bands.service.js";
import { GenresService } from "../../genres/services/genres.service.js";
import { TracksService } from "../../tracks/services/tracks.service.js";

@Resolver("Favourites")
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistsService: ArtistsService,
    private readonly genresService: GenresService
  ) {}

  @Query()
  async favourites(): Promise<Favourites> {
    return await this.favouritesService.getFavourites();
  }

  @Mutation()
  async addTrackToFavourites(@Args("id") id: string) {
    return await this.favouritesService.addToFavourites(id, "tracks");
  }

  @Mutation()
  async addBandToFavourites(@Args("id") id: string) {
    return await this.favouritesService.addToFavourites(id, "bands");
  }

  @Mutation()
  async addArtistToFavourites(@Args("id") id: string) {
    return await this.favouritesService.addToFavourites(id, "artists");
  }

  @Mutation()
  async addGenreToFavourites(@Args("id") id: string) {
    return await this.favouritesService.addToFavourites(id, "genres");
  }

  @Mutation()
  async removeTrackFromFavourites(@Args("id") id: string) {
    return await this.favouritesService.removeFromFavourites(id, "tracks");
  }

  @Mutation()
  async removeBandFromFavourites(@Args("id") id: string) {
    return await this.favouritesService.removeFromFavourites(id, "bands");
  }

  @Mutation()
  async removeArtistFromFavourites(@Args("id") id: string) {
    return await this.favouritesService.removeFromFavourites(id, "artists");
  }

  @Mutation()
  async removeGenreFromFavourites(@Args("id") id: string) {
    return await this.favouritesService.removeFromFavourites(id, "genres");
  }

  @ResolveField()
  async id(@Parent() favourites: { _id: string }) {
    return favourites._id;
  }

  @ResolveField()
  async bands(@Parent() favourites: { bandsIds: string[] }) {
    const ids: string[] = favourites.bandsIds;
    const bands: Band[] = await this.bandsService.findByIds(ids);
    return bands;
  }

  @ResolveField()
  async genres(@Parent() favourites: { genresIds: string[] }) {
    const ids: string[] = favourites.genresIds;
    const genres: Genre[] = await this.genresService.findByIds(ids);
    return genres;
  }

  @ResolveField()
  async artists(@Parent() favourites: { artistsIds: string[] }) {
    const ids: string[] = favourites.artistsIds;
    const artists: Artist[] = await this.artistsService.findByIds(ids);
    return artists;
  }

  @ResolveField()
  async tracks(@Parent() favourites: { tracksIds: string[] }) {
    const ids: string[] = favourites.tracksIds;
    const tracks: Track[] = await this.tracksService.findByIds(ids);
    return tracks;
  }
}
