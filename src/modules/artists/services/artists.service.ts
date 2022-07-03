import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { Artist } from "src/types/graphql.js";
import { DEF_LIMIT, DEF_OFFSET } from "../../../constants/constants.js";

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

  async getAll(limit: number, offset: number): Promise<[Artist]> {
    const res: { items: [Artist] } = await this.get(
      `?limit=${limit >= 0 ? limit : DEF_LIMIT}&offset=${
        offset >= 0 ? offset : DEF_OFFSET
      }`
    );
    return res.items;
  }
}
