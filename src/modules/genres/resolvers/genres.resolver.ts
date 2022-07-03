import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { GenresService } from "../services/genres.service.js";
import {
  CreateGenreInput,
  Genre,
  UpdateGenreInput,
} from "src/types/graphql.js";

@Resolver("Genre")
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query()
  async genre(@Args("id") id: string): Promise<Genre> {
    const genre: Genre = await this.genresService.findById(id);
    return genre;
  }

  @Query()
  async genres(
    @Args("limit") limit: number,
    @Args("offset") offset: number
  ): Promise<Genre[]> {
    const genres: Genre[] = await this.genresService.getAll(limit, offset);
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

  @ResolveField()
  async id(@Parent() genre: { _id: string }) {
    return genre._id;
  }
}
