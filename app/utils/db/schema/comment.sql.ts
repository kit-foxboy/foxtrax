import { foreignKey, integer, snakeCase, text } from "drizzle-orm/sqlite-core";

import { locationLog } from "./location-log.sql";

export const comment = snakeCase.table("comment", {
  id: integer().primaryKey({ autoIncrement: true }),
  replyToId: integer().default(0),
  locationLogId: integer().notNull().references(() => locationLog.id),
  content: text().notNull(),
}, table => [
  foreignKey({
    columns: [table.replyToId],
    foreignColumns: [table.id],
    name: "fk_comment_reply_id_comment_id",
  }),
]);
