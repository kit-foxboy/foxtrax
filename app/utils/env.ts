import z from "zod";
import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// throw a formatted error if the environment variables do not match the schema
tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
