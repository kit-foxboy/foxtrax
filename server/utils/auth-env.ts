import authEnv from "~/utils/env/auth";

export const authConfig = {
  secret: authEnv.BETTER_AUTH_SECRET,
  github: {
    clientId: authEnv.AUTH_GITHUB_CLIENT_ID,
    clientSecret: authEnv.AUTH_GITHUB_CLIENT_SECRET,
  },
};
