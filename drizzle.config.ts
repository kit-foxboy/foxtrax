import { defineConfig } from "drizzle-kit";
import env from "./app/utils/env";

import "dotenv/config";

const shared = {
  out: "./app/utils/db/migrations",
  schema: "./app/utils/db/schema/index.ts",
  casing: "snake_case",
} as const;

// Development migrates the local database file; production explicitly pushes to Turso Cloud.
export default defineConfig(
  env.NODE_ENV === "development"
    ? {
        ...shared,
        dialect: "sqlite",
        dbCredentials: { url: `file:${env.TURSO_LOCAL_DB_PATH}` },
      }
    : {
        ...shared,
        dialect: "turso",
        dbCredentials: {
          url: env.TURSO_DATABASE_URL,
          authToken: env.TURSO_AUTH_TOKEN,
        },
      },
);
