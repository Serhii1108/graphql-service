import "dotenv/config";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

const PORT = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
