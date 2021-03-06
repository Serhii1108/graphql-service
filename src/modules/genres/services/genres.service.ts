import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { DEF_LIMIT, DEF_OFFSET } from "../../../constants/constants.js";

import { Genre, GenreInput } from "src/types/graphql.js";

export interface DeleteUserResponse {
  acknowledged: boolean;
  deletedCount: number;
}

@Injectable()
export class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
    this.httpCache = new HTTPCache();
  }

  async findById(id: string): Promise<Genre> {
    return await this.get<Genre>(`/${id}`);
  }

  async findByIds(ids: string[]): Promise<Genre[]> {
    const genres: Genre[] = [];
    for (const id of ids) {
      const genre: Genre = await this.get<Genre>(`/${id}`);
      genres.push(genre);
    }
    return genres;
  }

  async getAll(limit: number, offset: number): Promise<Genre[]> {
    const res: { items: Genre[] } = await this.get<{ items: Genre[] }>(
      `?limit=${limit >= 0 ? limit : DEF_LIMIT}&offset=${
        offset >= 0 ? offset : DEF_OFFSET
      }`
    );
    return res.items;
  }

  async create(createGenreInput: GenreInput): Promise<Genre> {
    return await this.post<Genre>(
      "/",
      { ...createGenreInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async update(id: string, updateGenreInput: GenreInput): Promise<Genre> {
    return await this.put<Genre>(
      `/${id}`,
      { ...updateGenreInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async deleteGenre(id: string): Promise<DeleteUserResponse> {
    const res: DeleteUserResponse = await this.delete<DeleteUserResponse>(
      `/${id}`,
      {},
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
    return res;
  }
}
