import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { Track } from "src/types/graphql.js";
import { TracksService } from "../services/tracks.service.js";

@Resolver("Track")
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Query()
  async track(@Args("id") id: string): Promise<Track> {
    const track: Track = await this.tracksService.findById(id);
    return track;
  }

  @ResolveField()
  async id(@Parent() track: { _id: string }) {
    return track._id;
  }
}
