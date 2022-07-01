import { Injectable } from "@nestjs/common";
import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

import { RegisterInput, User } from "src/types/graphql.js";

@Injectable()
export class UserService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
    this.httpCache = new HTTPCache();
  }

  async didReceiveResponse(res: any) {
    const data = await res.json();
    if (res.ok) {
      data.id = data._id;
      if (data.items) {
        for (const item of data.items) {
          item.id = item._id;
        }
      }
    }
    return data;
  }

  async findOneById(id: string): Promise<User> {
    const user: User = await this.get<User>(`/${id}`);
    return user;
  }

  async getJwt(email: string, password: string): Promise<string> {
    const res: { jwt: string } = await this.post("/login", {
      email: email,
      password: password,
    });
    process.env.JWT = res.jwt;
    return res.jwt;
  }

  async register(registerInput: RegisterInput): Promise<User> {
    const createdUser: User = await this.post<User>("/register", {
      ...registerInput,
    });
    return createdUser;
  }
}
