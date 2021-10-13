
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- Database named "solar_sleep_app"

-- Table to store user data
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "email" VARCHAR (80) NOT NULL,
    "date_of_birth" DATE NOT NULL
);

-- Table to store individual users data
CREATE TABLE "exposuredata" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"hours_sleep" INT not null,
	"sleep_quality" INT not null,
	"start_lux_meter" INT not null,
	"end_lux_meter" INT not null,
	"start_lux_exposure_time" TIME not null,
	"end_lux_exposure_time" TIME not null,
	"mood_for_day" INT not null,
	"journal_entry" VARCHAR (250),
	"date" date not null default CURRENT_DATE
);


