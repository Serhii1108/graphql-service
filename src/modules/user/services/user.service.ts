import { Injectable } from "@nestjs/common";
import http from "http";
import { User } from "../models/user.model.js";

@Injectable()
export class UserService {
  private readonly usersUrl = process.env.USERS_URL;

  async findOneById(id: string): Promise<User> {
    return new Promise((resolve) => {
      let user: User;

      http.get(`${this.usersUrl}/${id}`, (res) => {
        let rawData = "";
        res.on("data", (data) => {
          rawData += data;
        });
        res.on("end", () => {
          user = JSON.parse(rawData);
          resolve(user);
        });
      });
    });
  }
}
