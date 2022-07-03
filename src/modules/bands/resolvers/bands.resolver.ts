import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Band, BandInput, DeleteResponse, Genre } from "src/types/graphql.js";
import { BandsService } from "../services/bands.service.js";
import { GenresService } from "../../genres/services/genres.service.js";

@Resolver("Band")
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService
  ) {}

  @Query()
  async band(@Args("id") id: string): Promise<Band> {
    const band: Band = await this.bandsService.findById(id);
    return band;
  }

  @Query()
  async bands(): Promise<[Band]> {
    const bands = await this.bandsService.getAll();
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
}
