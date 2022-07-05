import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import {
  Album,
  Artist,
  Band,
  DeleteResponse,
  Genre,
  Track,
  TrackInput,
} from "src/types/graphql.js";

import { TracksService } from "../services/tracks.service.js";
import { ArtistsService } from "../../artists/services/artists.service.js";
import { BandsService } from "../../bands/services/bands.service.js";
import { GenresService } from "../../genres/services/genres.service.js";
import { albumsService } from "../../albums/services/albums.service.js";

@Resolver("Track")
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly albumsService: albumsService,
    private readonly bandsService: BandsService,
    private readonly artistsService: ArtistsService,
    private readonly genresService: GenresService
  ) {}

  @Query()
  async track(@Args("id") id: string): Promise<Track> {
    const track: Track = await this.tracksService.findById(id);
    return track;
  }

  @Query()
  async tracks(
    @Args("limit") limit: number,
    @Args("offset") offset: number
  ): Promise<[Track]> {
    const track = await this.tracksService.getAll(limit, offset);
    return track;
  }

  @Mutation()
  async createTrack(
    @Args("createTrackInput") createTrackInput: TrackInput
  ): Promise<Track> {
    const track: Track = await this.tracksService.create(createTrackInput);
    return track;
  }

  @Mutation()
  async updateTrack(
    @Args("id") id: string,
    @Args("updateTrackInput") updateTrackInput: TrackInput
  ): Promise<Track> {
    const track: Track = await this.tracksService.update(id, updateTrackInput);
    return track;
  }

  @Mutation()
  async deleteTrack(@Args("id") id: string): Promise<DeleteResponse> {
    return await this.tracksService.deleteTrack(id);
  }

  @ResolveField()
  async id(@Parent() track: { _id: string }) {
    return track._id;
  }

  @ResolveField()
  async bands(@Parent() track: { bandsIds: string[] }) {
    const ids: string[] = track.bandsIds;
    const bands: Band[] = await this.bandsService.findByIds(ids);
    return bands;
  }

  @ResolveField()
  async artists(@Parent() track: { artistsIds: string[] }) {
    const ids: string[] = track.artistsIds;
    const artists: Artist[] = await this.artistsService.findByIds(ids);
    return artists;
  }

  @ResolveField()
  async genres(@Parent() track: { genresIds: string[] }) {
    const ids: string[] = track.genresIds;
    const genres: Genre[] = await this.genresService.findByIds(ids);
    return genres;
  }

  @ResolveField()
  async album(@Parent() track: { albumId: string }) {
    const id = track.albumId;
    const album: Album = await this.albumsService.findById(id);
    return album;
  }
}
