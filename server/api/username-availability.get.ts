import { eq } from "drizzle-orm";
import db from "~/utils/db";
import { user } from "~/utils/db/schema";

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const trimmed = typeof name === "string" ? name.trim() : "";
  if (!trimmed) {
    throw createError({ statusCode: 400, statusMessage: "name query parameter is required" });
  }

  const [existing] = await db.select({ id: user.id }).from(user).where(eq(user.name, trimmed)).limit(1);
  return { available: !existing };
});
