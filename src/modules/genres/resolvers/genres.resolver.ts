import { Args, Query, Resolver } from "@nestjs/graphql";
import { Genre } from "../models/genres.model.js";

import { GenresService } from "../services/genres.service.js";

@Resolver()
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query()
  async genre(@Args("id") id: string): Promise<Genre> {
    const genre: Genre = await this.genresService.findById(id);
    return genre;
  }

  @Query()
  async genres(): Promise<Genre[]> {
    const genres: Genre[] = await this.genresService.getAll();
    return genres;
  }
}
