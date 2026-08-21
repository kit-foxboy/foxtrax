import { integer, snakeCase } from "drizzle-orm/sqlite-core";

import { timestamps } from "../common";
import { location } from "./location.sql";

export const locationLog = snakeCase.table("location_log", {
  id: integer().primaryKey({ autoIncrement: true }),
  locationId: integer().notNull().references(() => location.id),
  startedVisitAt: integer().default(0),
  endedVisitAt: integer().default(0),
  isApproximate: integer({ mode: "boolean" }).default(true),
  ...timestamps,
});
