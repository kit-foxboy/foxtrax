import { integer } from "drizzle-orm/sqlite-core";

export const timestamps = {
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  deletedAt: integer().default(0),
};
