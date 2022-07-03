import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Artist } from "src/types/graphql.js";
import { ArtistsService } from "../services/artists.service.js";

@Resolver("Artist")
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Query()
  async artist(@Args("id") id: string): Promise<Artist> {
    const artist: Artist = await this.artistsService.findById(id);
    return artist;
  }

  @ResolveField()
  async id(@Parent() artist: { _id: string }) {
    return artist._id;
  }
}
