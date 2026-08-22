import { integer, snakeCase, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "../common";
import { locationLog } from "./location-log.sql";

export const locationLogImage = snakeCase.table("location_log_image", {
  id: integer().primaryKey({ autoIncrement: true }),
  userId: integer().notNull().references(() => locationLog.userId),
  key: text().notNull(),
  locationLogId: integer().notNull().references(() => locationLog.id),
  ...timestamps,
});
