import { integer, snakeCase, text } from "drizzle-orm/sqlite-core";

import { timestamps } from "../common";
import { category } from "./category.sql";
import { locationLog } from "./location-log.sql";

export const feature = snakeCase.table("feature", {
  id: integer().primaryKey({ autoIncrement: true }),
  locationLogId: integer().notNull().references(() => locationLog.id),
  categoryId: integer().notNull().references(() => category.id),
  name: text().notNull(),
  description: text().default(""),
  isRecommended: integer({ mode: "boolean" }).default(false),
  ...timestamps,
});
