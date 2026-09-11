CREATE TABLE `account` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`issuer` text NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` integer NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`password` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	CONSTRAINT `fk_account_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL UNIQUE,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` integer NOT NULL,
	CONSTRAINT `fk_session_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`email` text NOT NULL UNIQUE,
	`email_verified` integer DEFAULT false NOT NULL,
	`image` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`is_anonymous` integer DEFAULT false
);
--> statement-breakpoint
CREATE TABLE `verification` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `category` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `comment` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` integer NOT NULL,
	`reply_to_id` integer DEFAULT 0,
	`location_log_id` integer NOT NULL,
	`content` text NOT NULL,
	CONSTRAINT `fk_comment_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
	CONSTRAINT `fk_comment_location_log_id_location_log_id_fk` FOREIGN KEY (`location_log_id`) REFERENCES `location_log`(`id`),
	CONSTRAINT `fk_comment_reply_id_comment_id` FOREIGN KEY (`reply_to_id`) REFERENCES `comment`(`id`)
);
--> statement-breakpoint
CREATE TABLE `feature_image` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` integer NOT NULL,
	`feature_id` integer NOT NULL,
	`key` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer DEFAULT 0,
	CONSTRAINT `fk_feature_image_user_id_feature_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `feature`(`user_id`),
	CONSTRAINT `fk_feature_image_feature_id_feature_id_fk` FOREIGN KEY (`feature_id`) REFERENCES `feature`(`id`)
);
--> statement-breakpoint
CREATE TABLE `feature` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` integer NOT NULL,
	`location_log_id` integer NOT NULL,
	`category_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text DEFAULT '',
	`is_recommended` integer DEFAULT false,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer DEFAULT 0,
	CONSTRAINT `fk_feature_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
	CONSTRAINT `fk_feature_location_log_id_location_log_id_fk` FOREIGN KEY (`location_log_id`) REFERENCES `location_log`(`id`),
	CONSTRAINT `fk_feature_category_id_category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)
);
--> statement-breakpoint
CREATE TABLE `location_log_image` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` integer NOT NULL,
	`key` text NOT NULL,
	`location_log_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer DEFAULT 0,
	CONSTRAINT `fk_location_log_image_user_id_location_log_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `location_log`(`user_id`),
	CONSTRAINT `fk_location_log_image_location_log_id_location_log_id_fk` FOREIGN KEY (`location_log_id`) REFERENCES `location_log`(`id`)
);
--> statement-breakpoint
CREATE TABLE `location_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` integer NOT NULL,
	`location_id` integer NOT NULL,
	`started_visit_at` integer DEFAULT 0,
	`ended_visit_at` integer DEFAULT 0,
	`is_approximate` integer DEFAULT true,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer DEFAULT 0,
	CONSTRAINT `fk_location_log_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
	CONSTRAINT `fk_location_log_location_id_location_id_fk` FOREIGN KEY (`location_id`) REFERENCES `location`(`id`)
);
--> statement-breakpoint
CREATE TABLE `location` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text DEFAULT '',
	`lat` real NOT NULL,
	`lng` real NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX `account_issuer_accountId_uidx` ON `account` (`issuer`,`account_id`);--> statement-breakpoint
CREATE INDEX `account_userId_idx` ON `account` (`user_id`);--> statement-breakpoint
CREATE INDEX `session_userId_idx` ON `session` (`user_id`);--> statement-breakpoint
CREATE INDEX `verification_identifier_idx` ON `verification` (`identifier`);--> statement-breakpoint
CREATE UNIQUE INDEX `location_slug_index` ON `location` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `location_lat_lng_index` ON `location` (`lat`,`lng`);