import db, { ensureConnected } from "../utils/db";

const ERROR_RETRY_DELAY_MS = 5_000;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Plugin to manage long-polls (see longPollTimeoutMs in db.ts)
// only returns once changes arrive or it times out, so manual sleep is only needed on errors.
async function pullLoop() {
  await ensureConnected();

  while (true) {
    try {
      await db.$client.pull();
    }
    catch (error) {
      console.error("turso pull failed:", error);
      await sleep(ERROR_RETRY_DELAY_MS);
    }
  }
}

export default defineNitroPlugin(() => {
  void pullLoop();
});
