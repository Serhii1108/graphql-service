import "dotenv/config";

import { startServer } from "./server.js";

const PORT = process.env.PORT ?? 8080;

startServer(Number(PORT));
