import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { Artist } from "src/types/graphql.js";

@Injectable()
export class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
    this.httpCache = new HTTPCache();
  }

  async findById(id: string): Promise<Artist> {
    return await this.get<Artist>(`/${id}`);
  }
}
