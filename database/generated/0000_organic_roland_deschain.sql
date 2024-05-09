CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" varchar(256),
	"created_at" timestamp,
	"updated_at" timestamp
);
