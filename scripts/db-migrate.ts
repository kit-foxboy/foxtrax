import { drizzle } from "drizzle-orm/tursodatabase-serverless";
import { migrate } from "drizzle-orm/tursodatabase-serverless/migrator";

import env from "../app/utils/env/server";

async function main() {
  const db = drizzle({
    connection: {
      url: env.TURSO_DATABASE_URL,
      authToken: env.TURSO_AUTH_TOKEN,
    },
  });

  await migrate(db, { migrationsFolder: "./app/utils/db/migrations" });

  console.warn("Migrations applied to the remote database.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
