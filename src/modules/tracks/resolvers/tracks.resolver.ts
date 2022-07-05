import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Track, TrackInput } from "src/types/graphql.js";
import { TracksService } from "../services/tracks.service.js";

@Resolver("Track")
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

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

  @ResolveField()
  async id(@Parent() track: { _id: string }) {
    return track._id;
  }
}
