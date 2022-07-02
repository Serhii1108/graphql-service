import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { Band } from "src/types/graphql.js";
import { BandsService } from "../services/bands.service.js";

@Resolver("Band")
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

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

  @ResolveField()
  async id(@Parent() band: { _id: string }) {
    return band._id;
  }
}
