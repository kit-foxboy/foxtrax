import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";
import { anonymous } from "better-auth/plugins";
import db from "./db/index";
import { account, session, user, verification } from "./db/schema/auth.sql";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  plugins: [anonymous({
    generateName: () => {
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
