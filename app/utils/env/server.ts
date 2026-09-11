import z from "zod";
import tryParseEnv from "../try-parse-env";
import sharedEnv from "./shared";

const ServerEnvSchema = z.object({
  TURSO_DATABASE_URL: z.string().min(1),
  TURSO_AUTH_TOKEN: z.string().min(1),
});

export type ServerEnv = z.infer<typeof ServerEnvSchema>;

tryParseEnv(ServerEnvSchema);

export default {
  ...sharedEnv,
  // eslint-disable-next-line node/no-process-env
  ...ServerEnvSchema.parse(process.env),
};
