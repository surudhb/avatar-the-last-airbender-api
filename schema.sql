-- Cloudflare D1 (SQLite) schema for the Avatar: The Last Airbender API
-- Array fields are stored as JSON strings and parsed at query time.
-- Initialize: npm run db:init (local) or npm run db:init:remote (production)

CREATE TABLE IF NOT EXISTS bending (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  name             TEXT NOT NULL UNIQUE,
  synopsis         TEXT,
  inspiration      TEXT,
  pioneers         TEXT, -- JSON array
  notableUsers     TEXT, -- JSON array
  techniques       TEXT, -- JSON array
  advancedTechniques TEXT, -- JSON array
  specializations  TEXT, -- JSON array
  strengths        TEXT, -- JSON array
  weaknesses       TEXT  -- JSON array
);

CREATE TABLE IF NOT EXISTS characters (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  name            TEXT NOT NULL,
  aliases         TEXT, -- JSON array
  nationality     TEXT,
  organizations   TEXT, -- JSON array
  gender          TEXT,
  allies          TEXT, -- JSON array
  enemies         TEXT, -- JSON array
  loveInterests   TEXT, -- JSON array
  professions     TEXT, -- JSON array
  weaponsOfChoice TEXT, -- JSON array
  fightingStyles  TEXT, -- JSON array
  firstAppearance TEXT,
  lastAppearance  TEXT,
  voicedBy        TEXT
);

CREATE TABLE IF NOT EXISTS episodes (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL,
  episodeId   INTEGER, -- e.g. 109 for Season 1 Episode 9
  book        TEXT NOT NULL,
  synopsis    TEXT,
  animatedBy  TEXT,
  directedBy  TEXT,
  writtenBy   TEXT, -- JSON array
  firstAired  TEXT
);

CREATE TABLE IF NOT EXISTS locations (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT,
  name               TEXT NOT NULL,
  type               TEXT NOT NULL,
  capital            TEXT,
  nation             TEXT NOT NULL,
  location           TEXT NOT NULL,
  governmentType     TEXT,
  legalAuthority     TEXT,
  spiritualAuthority TEXT,
  notableLeaders     TEXT, -- JSON array
  notableMembers     TEXT, -- JSON array
  currency           TEXT,
  firstAppearance    TEXT
);

CREATE TABLE IF NOT EXISTS organizations (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  name            TEXT NOT NULL UNIQUE,
  description     TEXT NOT NULL,
  notableMembers  TEXT, -- JSON array
  founders        TEXT, -- JSON array
  leaders         TEXT, -- JSON array
  affiliations    TEXT, -- JSON array
  headquarters    TEXT, -- JSON array
  firstAppearance TEXT
);
