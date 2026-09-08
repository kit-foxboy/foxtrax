import z from "zod";
import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  TURSO_DATABASE_URL: z.url(),
  TURSO_AUTH_TOKEN: z.string(),
  TURSO_LOCAL_DB_PATH: z.string().default("local.db"),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url().default("http://localhost:3000"),
  AUTH_GITHUB_CLIENT_ID: z.string(),
  AUTH_GITHUB_CLIENT_SECRET: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// throw a formatted error if the environment variables do not match the schema
tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
