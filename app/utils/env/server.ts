import z from "zod";
import tryParseEnv from "../try-parse-env";
import sharedEnv from "./shared";

const ServerEnvSchema = z.object({
  // Must be a Turso Cloud URL - a bad address here fails as an annoyingly cryptic
  // ECONNREFUSED deep inside a query instead of a clear startup error.
  TURSO_DATABASE_URL: z.string().min(1).refine(url => /^(?:libsql|https):\/\//.test(url) && !/^(?:https?:\/\/)?(?:127\.0\.0\.1|localhost)(?::|\/|$)/.test(url), {
    message: "TURSO_DATABASE_URL must be a libsql:// or https:// Turso Cloud URL, not a local address",
  }),
  TURSO_AUTH_TOKEN: z.string().min(1),
});

export type ServerEnv = z.infer<typeof ServerEnvSchema>;

tryParseEnv(ServerEnvSchema);

export default {
  ...sharedEnv,
  // eslint-disable-next-line node/no-process-env
  ...ServerEnvSchema.parse(process.env),
};
