import { Module } from "@nestjs/common";
import { TracksResolver } from "./resolvers/tracks.resolver.js";
import { TracksService } from "./services/tracks.service.js";

@Module({
  providers: [TracksService, TracksResolver],
})
export class TracksModule {}
