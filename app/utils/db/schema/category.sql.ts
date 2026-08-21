import { integer, snakeCase, text } from "drizzle-orm/sqlite-core";

import { timestamps } from "../common";

export const category = snakeCase.table("category", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  ...timestamps,
});
