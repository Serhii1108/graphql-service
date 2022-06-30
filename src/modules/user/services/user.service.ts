import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { User, UserRegistrationDto } from "../models/user.model.js";

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
    process.env.JWT = res.jwt;
    return res.jwt;
  }

  async register(userRegistrationDto: UserRegistrationDto): Promise<User> {
    const createdUser: User = await this.post<User>("/register", {
      ...userRegistrationDto,
    });
    return createdUser;
  }
}
