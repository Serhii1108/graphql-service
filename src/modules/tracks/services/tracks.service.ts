import { Injectable } from "@nestjs/common";
import { RESTDataSource, HTTPCache } from "apollo-datasource-rest";

import { Track, TrackInput } from "src/types/graphql.js";
import { DEF_LIMIT, DEF_OFFSET } from "../../../constants/constants.js";

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

  async getAll(limit: number, offset: number): Promise<[Track]> {
    const res: { items: [Track] } = await this.get(
      `?limit=${limit >= 0 ? limit : DEF_LIMIT}&offset=${
        offset >= 0 ? offset : DEF_OFFSET
      }`
    );
    return res.items;
  }

  async create(createTrackInput: TrackInput): Promise<Track> {
    return await this.post<Track>(
      "/",
      { ...createTrackInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async update(id: string, updateTrackInput: TrackInput): Promise<Track> {
    return await this.put<Track>(
      `/${id}`,
      { ...updateTrackInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }
}
