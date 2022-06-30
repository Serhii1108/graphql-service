import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";
import { Genre } from "../models/genres.model.js";

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
}
