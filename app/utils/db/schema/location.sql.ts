import { integer, real, snakeCase, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { timestamps } from "../common";

export const location = snakeCase.table("location", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().default(""),
  lat: real().notNull(),
  lng: real().notNull(),
  ...timestamps,
}, table => [
  uniqueIndex("location_slug_index").on(table.slug),
  uniqueIndex("location_lat_lng_index").on(table.lat, table.lng),
]);
