import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { Band, BandInput, DeleteResponse } from "src/types/graphql.js";

@Injectable()
export class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
    this.httpCache = new HTTPCache();
  }

  async findById(id: string): Promise<Band> {
    return await this.get<Band>(`/${id}`);
  }

  async getAll(): Promise<[Band]> {
    const res: { items: [Band] } = await this.get("/");
    return res.items;
  }

  async create(createBandInput: BandInput): Promise<Band> {
    return await this.post<Band>(
      "/",
      { ...createBandInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async update(id: string, updateBandInput: BandInput): Promise<Band> {
    return await this.put<Band>(
      `/${id}`,
      { ...updateBandInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }

  async deleteBand(id: string): Promise<DeleteResponse> {
    return await this.delete<DeleteResponse>(
      `/${id}`,
      {},
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }
}
