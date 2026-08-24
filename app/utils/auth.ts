import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins";
import db from "./db/index";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  plugins: [anonymous({
    generateName: (ctx) => {
      // Use submitted name if provided, otherwise generate a random name
      if (ctx.query?.name && typeof ctx.query.name === "string") {
        // TODO: Decide on whether or not to check for unqiue names in the database or just allow duplicates.
        // Leaning towards allowing duplicates and adding a Guest tag to front-end display names.
        // This SHOULD be a filtered string thanks to Better Auth and Drizzle, but we should still check if any malicious input is possible here.
        // Also, figure out whether to use query, body, or params for this since I don't know how the URL is actually formed by the plugin.
        // Docs are unclear and body is the any type which is... less than helpful.
        return ctx.query.name;
      }

      return `Guest ${crypto.randomUUID()}`;
    },
    onLinkAccount: async () => {
      // TODO: Transfer any data from the anonymous user to the linked account
      // The anonymous user will be deleted after this function is called,
      // so ensure that all tables with a user_id get updated to the new user's id before this function returns.
    },
  })],
  advanced: {
    database: {
      // "serial" defers id generation to the DB's autoincrement column.
      generateId: "serial",
    },
  },
});
