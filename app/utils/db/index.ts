import { drizzle } from "drizzle-orm/tursodatabase-sync";

import env from "../env";

// Reads/writes hit the local database file; sync to the cloud is explicit via db.$client.push()/pull().
const db = drizzle({
  connection: {
    path: env.TURSO_LOCAL_DB_PATH,
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
    clientName: "foxtrax",
  },
});

export default db;
