
import { createPool } from "mysql2/promise";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
}

export const db = createPool(process.env.DATABASE_URL);
