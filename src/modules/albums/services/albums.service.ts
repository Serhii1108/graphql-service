import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { Album } from "src/types/graphql.js";

@Injectable()
export class albumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
    this.httpCache = new HTTPCache();
  }

  async findById(id: string): Promise<Album> {
    return await this.get<Album>(`/${id}`);
  }
}
