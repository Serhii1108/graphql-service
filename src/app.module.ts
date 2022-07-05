import { join } from "path";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { UserModule } from "./modules/user/user.module.js";
import { GenresModule } from "./modules/genres/genres.module.js";
import { BandsModule } from "./modules/bands/bands.module.js";
import { ArtistsModule } from "./modules/artists/artists.module.js";
import { AlbumModule } from "./modules/albums/albums.module.js";
import { TracksModule } from "./modules/tracks/tracks.module.js";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/types/graphql.ts"),
      },
    }),
    UserModule,
    GenresModule,
    BandsModule,
    ArtistsModule,
    AlbumModule,
    TracksModule,
  ],
})
export class AppModule {}
