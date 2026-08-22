import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "./db/index";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  advanced: {
    // Renamed/relocated in this better-auth version: "serial" defers id generation to the DB's autoincrement column.
    database: {
      generateId: "serial",
    },
  },
});
