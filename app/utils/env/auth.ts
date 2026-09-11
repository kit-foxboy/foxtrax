import z from "zod";
import tryParseEnv from "../try-parse-env";
import sharedEnv from "./shared";

const AuthEnvSchema = z.object({
  BETTER_AUTH_URL: z.url().default("http://localhost:3000"),
  BETTER_AUTH_SECRET: z.string().min(1),
  AUTH_GITHUB_CLIENT_ID: z.string().min(1),
  AUTH_GITHUB_CLIENT_SECRET: z.string().min(1),
});

export type AuthEnv = z.infer<typeof AuthEnvSchema>;

tryParseEnv(AuthEnvSchema);

export default {
  ...sharedEnv,
  // eslint-disable-next-line node/no-process-env
  ...AuthEnvSchema.parse(process.env),
};
