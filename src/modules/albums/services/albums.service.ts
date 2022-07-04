import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { Album, AlbumInput } from "src/types/graphql.js";
import { DEF_LIMIT, DEF_OFFSET } from "../../../constants/constants.js";

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

  async getAll(limit: number, offset: number): Promise<[Album]> {
    const res: { items: [Album] } = await this.get(
      `?limit=${limit >= 0 ? limit : DEF_LIMIT}&offset=${
        offset >= 0 ? offset : DEF_OFFSET
      }`
    );
    return res.items;
  }

  async create(createAlbumInput: AlbumInput): Promise<Album> {
    return await this.post<Album>(
      "/",
      { ...createAlbumInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }
}
