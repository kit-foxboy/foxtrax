import { drizzle } from "drizzle-orm/tursodatabase-sync";

import env from "~/utils/env";

// Reads/writes hit the local database file first; cloud sync automatically happens via push/pull plugins.
const db = drizzle({
  connection: {
    path: env.TURSO_LOCAL_DB_PATH,
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
    clientName: "foxtrax",
    // How long the server holds a pull() open waiting for changes before replying empty; bounds the pull plugin's poll loop.
    // Needed to keep the pull loop from eating cpu cycles on empty responses.
    longPollTimeoutMs: 30_000,
  },
});

export default db;

// The drizzle driver only constructs the client; the sync engine itself needs an explicit connect()
// Cached so it only runs once (DEFINITELY didn't forget this and blow up the sync engine earlier).
let connected: Promise<void> | null = null;
export function ensureConnected() {
  connected ??= db.$client.connect();
  return connected;
}

// SHOULD queue calls behind one another instead of firing concurrent push() calls.
let pushChain = Promise.resolve();

// Fire-and-forget: queues a push after a local write, never rejects (errors are only logged).
export function schedulePush() {
  pushChain = pushChain
    .then(() => ensureConnected())
    .then(() => db.$client.push())
    .catch((error) => {
      console.error("turso push failed:", error);
    });
}
