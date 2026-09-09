import { schedulePush } from "~/utils/db";

const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);
const AUTH_CALLBACK_PATH = /^\/api\/auth\/callback\//; // this catches requests to the auth callback endpoint that bypass the usual write methods

// Plugin that schedules a background push to Turso Cloud after any write request
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("afterResponse", (event) => {
    if (WRITE_METHODS.has(event.method) || AUTH_CALLBACK_PATH.test(event.path)) {
      schedulePush();
    }
  });
});
