import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { User } from "../models/user.model.js";

@Injectable()
export class UserService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
    this.httpCache = new HTTPCache();
  }

  async findOneById(id: string): Promise<User> {
    return await this.get(`/${id}`);
  }
}
