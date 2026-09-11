import { drizzle } from "drizzle-orm/tursodatabase-sync";
import { migrate } from "drizzle-orm/tursodatabase-sync/migrator";

import env from "../app/utils/env/server";

// Applies pending migrations through the sync engine (captured as CDC ops),
// then pushes them to the remote Turso Cloud database for this environment.
async function main() {
  const db = drizzle({
    connection: {
      path: env.TURSO_LOCAL_DB_PATH,
      url: env.TURSO_DATABASE_URL,
      authToken: env.TURSO_AUTH_TOKEN,
      clientName: "foxtrax-migrator",
    },
  });

  await migrate(db, { migrationsFolder: "./app/utils/db/migrations" });
  await db.$client.push();
  await db.$client.close();

  console.warn("Migrations applied locally and pushed to the remote.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
