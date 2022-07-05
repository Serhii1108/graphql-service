import { Injectable } from "@nestjs/common";
import { RESTDataSource, HTTPCache } from "apollo-datasource-rest";

import { Track } from "src/types/graphql.js";

@Injectable()
export class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
    this.httpCache = new HTTPCache();
  }

  async findById(id: string): Promise<Track> {
    return await this.get<Track>(`/${id}`);
  }
}
