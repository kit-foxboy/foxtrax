// Dumb non-db driven way to centralize app settings and constants
// A full table is overkill with SQLite and introduces type safety issues to something trivial
export const APP_NAME = "FoxTrax";
export const APP_URL = import.meta.dev ? "http://localhost:3000" : "https://foxtrax.vercel.app/";
