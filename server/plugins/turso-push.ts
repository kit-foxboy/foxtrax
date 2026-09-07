import { schedulePush } from "../utils/db";

const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

// Plugin that schedules a background push to Turso Cloud after any write request
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("afterResponse", (event) => {
    if (WRITE_METHODS.has(event.method)) {
      schedulePush();
    }
  });
});
