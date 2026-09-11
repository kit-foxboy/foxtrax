import { defineClientAuth } from "@nuxtjs/better-auth/config";
import { anonymousClient } from "better-auth/client/plugins";

export default defineClientAuth({
  plugins: [anonymousClient()],
});
