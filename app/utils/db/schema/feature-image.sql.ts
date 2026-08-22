import { integer, snakeCase, text } from "drizzle-orm/sqlite-core";

import { timestamps } from "../common";
import { feature } from "./feature.sql";

export const FeatureImage = snakeCase.table("feature_image", {
  id: integer().primaryKey({ autoIncrement: true }),
  userId: integer().notNull().references(() => feature.userId),
  featureId: integer().notNull().references(() => feature.id),
  key: text().notNull(),
  ...timestamps,
});
