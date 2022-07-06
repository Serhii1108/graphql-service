import { Injectable } from "@nestjs/common";
import { RESTDataSource, HTTPCache } from "apollo-datasource-rest";

import { Favourites } from "src/types/graphql.js";

@Injectable()
export class FavouritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
    this.httpCache = new HTTPCache();
  }

  async getFavourites(): Promise<Favourites> {
    return await this.get<Favourites>(
      "",
      {},
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async addTrackToFavourites(id: string): Promise<Favourites> {
    return await this.put<Favourites>(
      "/add",
      { type: "tracks", id },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async addBandToFavourites(id: string): Promise<Favourites> {
    return await this.put<Favourites>(
      "/add",
      { type: "bands", id },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }
}
