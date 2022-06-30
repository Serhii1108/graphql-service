import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { User, UserRegistrationModel } from "../models/user.model.js";

@Injectable()
export class UserService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
    this.httpCache = new HTTPCache();
  }

  async findOneById(id: string): Promise<User> {
    return await this.get<User>(`/${id}`);
  }

  async getJwt(email: string, password: string): Promise<string> {
    const res: { jwt: string } = await this.post("/login", {
      email: email,
      password: password,
    });
    return res.jwt;
  }

  async register(user: UserRegistrationModel): Promise<User> {
    const createdUser: User = await this.post<User>("/register", { ...user });
    return createdUser;
  }
}
