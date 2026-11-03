import { createPool } from "mysql2/promise";

let pool: ReturnType<typeof createPool> | null = null;

export function getDb() {

    if (!pool) {

        const databaseUrl = process.env.DATABASE_URL;

        if (!databaseUrl) {
            throw new Error("DATABASE_URL is not configured");
        }

        pool = createPool(databaseUrl);
    }

    return pool;
}