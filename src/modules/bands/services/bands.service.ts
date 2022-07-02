import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { Band, CreateBandInput } from "src/types/graphql.js";

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

  async create(createBandInput: CreateBandInput): Promise<Band> {
    return await this.post<Band>(
      "/",
      { ...createBandInput },
      { headers: { Authorization: `Bearer ${process.env.JWT}` } }
    );
  }
}
