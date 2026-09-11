import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { defineServerAuth } from "@nuxtjs/better-auth/config";
import { anonymous } from "better-auth/plugins";
import db from "~/utils/db";
import { account, session, user, verification } from "~/utils/db/schema/auth.sql";
import { authConfig } from "./utils/auth-env";

export default defineServerAuth({
  secret: authConfig.secret,
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [anonymous({
    generateName: () => {
      return `Guest ${crypto.randomUUID()}`;
    },
    onLinkAccount: async () => {
      // TODO: Transfer any data from the anonymous user to the linked account
      // The anonymous user will be deleted after this function is called,
      // so ensure that all tables with a user_id get updated to the new user's id before this function returns.
      console.error("Unimplemented function onLinkAccount, deferring until schema is more battle-tested");
    },
  })],
  socialProviders: {
    github: {
      clientId: authConfig.github.clientId,
      clientSecret: authConfig.github.clientSecret,
    },
  },
  advanced: {
    database: {
      // "serial" defers id generation to the DB's autoincrement column.
      generateId: "serial",
    },
  },
});
