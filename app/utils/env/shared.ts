import z from "zod";
import tryParseEnv from "../try-parse-env";

const SharedEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  TURSO_LOCAL_DB_PATH: z.string().default("local.db"),
});

export type SharedEnv = z.infer<typeof SharedEnvSchema>;

tryParseEnv(SharedEnvSchema);

// eslint-disable-next-line node/no-process-env
export default SharedEnvSchema.parse(process.env);
