import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins";
import db from "./db/index";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  plugins: [anonymous({
    generateRandomEmail: () => {
      const id = crypto.randomUUID();
      return `guest-${id}@example.com`;
    },
  })],
  advanced: {
    database: {
      // "serial" defers id generation to the DB's autoincrement column.
      generateId: "serial",
    },
  },
});
