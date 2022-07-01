import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { CreateGenreInput, Genre } from "src/types/graphql.js";

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

  async getAll(): Promise<Genre[]> {
    const res: { items: Genre[] } = await this.get<{ items: Genre[] }>("/");
    return res.items;
  }

  async create(createGenreDto: CreateGenreInput): Promise<Genre> {
    return await this.post<Genre>(
      "/",
      { ...createGenreDto },
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
