import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { GenresService } from "../services/genres.service.js";
import {
  CreateGenreInput,
  Genre,
  UpdateGenreInput,
} from "src/types/graphql.js";

@Resolver("Genres")
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

  @Mutation()
  async createGenre(
    @Args("createGenreInput") createGenreInput: CreateGenreInput
  ) {
    const genre: Genre = await this.genresService.create(createGenreInput);
    return genre;
  }

  @Mutation()
  async updateGenre(
    @Args("id") id: string,
    @Args("updateGenreInput") updateGenreInput: UpdateGenreInput
  ) {
    const genre: Genre = await this.genresService.update(id, updateGenreInput);
    return genre;
  }

  @Mutation()
  async deleteGenre(@Args("id") id: string) {
    return await this.genresService.deleteGenre(id);
  }
}
