import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import {
  Artist,
  ArtistInput,
  Band,
  DeleteResponse,
} from "src/types/graphql.js";
import { ArtistsService } from "../services/artists.service.js";
import { BandsService } from "../../bands/services/bands.service.js";

@Resolver("Artist")
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService
  ) {}

  @Query()
  async artist(@Args("id") id: string): Promise<Artist> {
    const artist: Artist = await this.artistsService.findById(id);
    return artist;
  }

  @Query()
  async artists(
    @Args("limit") limit: number,
    @Args("offset") offset: number
  ): Promise<[Artist]> {
    const artists = await this.artistsService.getAll(limit, offset);
    return artists;
  }

  @Mutation()
  async createArtist(
    @Args("createArtistInput") createArtistInput: ArtistInput
  ): Promise<Artist> {
    const artist: Artist = await this.artistsService.create(createArtistInput);
    return artist;
  }

  @Mutation()
  async updateArtist(
    @Args("id") id: string,
    @Args("updateArtistInput") updateArtistInput: ArtistInput
  ): Promise<Artist> {
    const artist: Artist = await this.artistsService.update(
      id,
      updateArtistInput
    );
    return artist;
  }

  @Mutation()
  async deleteArtist(@Args("id") id: string): Promise<DeleteResponse> {
    return await this.artistsService.deleteArtist(id);
  }

  @ResolveField()
  async id(@Parent() artist: { _id: string }) {
    return artist._id;
  }

  @ResolveField()
  async bands(@Parent() artist: { bandsIds: string[] }) {
    const ids: string[] = artist.bandsIds;
    const bands: Band[] = await this.bandsService.findByIds(ids);
    return bands;
  }
}
