import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";
import { anonymous } from "better-auth/plugins";
import { account, session, user, verification } from "~/utils/db/schema/auth.sql";
import env from "~/utils/env";
import db from "./db";

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
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  advanced: {
    database: {
      // "serial" defers id generation to the DB's autoincrement column.
      generateId: "serial",
    },
  },
});
