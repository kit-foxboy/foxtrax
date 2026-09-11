import { drizzle } from "drizzle-orm/tursodatabase-serverless";

import env from "~/utils/env/server";

const db = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
});

export default db;
