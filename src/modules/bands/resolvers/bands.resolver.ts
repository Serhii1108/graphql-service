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
  Band,
  BandInput,
  DeleteResponse,
  Genre,
  Member,
  MemberInput,
} from "src/types/graphql.js";
import { BandsService } from "../services/bands.service.js";
import { GenresService } from "../../genres/services/genres.service.js";
import { ArtistsService } from "../../artists/services/artists.service.js";

@Resolver("Band")
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService
  ) {}

  @Query()
  async band(@Args("id") id: string): Promise<Band> {
    const band: Band = await this.bandsService.findById(id);
    return band;
  }

  @Query()
  async bands(
    @Args("limit") limit: number,
    @Args("offset") offset: number
  ): Promise<[Band]> {
    const bands = await this.bandsService.getAll(limit, offset);
    return bands;
  }

  @Mutation()
  async createBand(
    @Args("createBandInput") createBandInput: BandInput
  ): Promise<Band> {
    const band: Band = await this.bandsService.create(createBandInput);
    return band;
  }

  @Mutation()
  async updateBand(
    @Args("id") id: string,
    @Args("updateBandInput") updateBandInput: BandInput
  ): Promise<Band> {
    const band: Band = await this.bandsService.update(id, updateBandInput);
    return band;
  }

  @Mutation()
  async deleteBand(@Args("id") id: string): Promise<DeleteResponse> {
    return await this.bandsService.deleteBand(id);
  }

  @ResolveField()
  async id(@Parent() band: { _id: string }) {
    return band._id;
  }

  @ResolveField()
  async genres(@Parent() band: { genresIds: string[] }) {
    const ids: string[] = band.genresIds;
    const genres: Genre[] = await this.genresService.findByIds(ids);
    return genres;
  }

  @ResolveField()
  async members(@Parent() band: { members: MemberInput[] }) {
    const { members } = band;
    const artists: Artist[] = await Promise.all(
      members.map(async (member) => {
        return this.artistsService.findById(member.artist);
      })
    );
    return await Promise.all(
      artists.map<Member>((artist, index) => ({
        id: members[index].artist,
        firstName: artist.firstName,
        secondName: artist.secondName,
        middleName: artist.middleName,
        instrument: members[index].instrument,
        years: members[index].years,
      }))
    );
  }
}
