import { integer, snakeCase } from "drizzle-orm/sqlite-core";

import { timestamps } from "../common";
import { location } from "./location.sql";

export const locationLog = snakeCase.table("locationLog", {
  id: integer().primaryKey({ autoIncrement: true }),
  locationId: integer().notNull().references(() => location.id),
  startedAt: integer().default(0),
  endedAt: integer().default(0),
  approximate: integer({ mode: "boolean" }).default(true),
  ...timestamps,
});
